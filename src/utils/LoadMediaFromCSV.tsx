import Papa from 'papaparse';
import type { MediaAsset } from '../model/MediaAsset'

export const loadMediaFromCSV = async (url: string): Promise<MediaAsset[]> => {
  const response = await fetch(url);
  const reader = response.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder('utf-8');
  const csv = decoder.decode(result?.value);

  return new Promise((resolve, reject) => {
    Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results);
        resolve(results.data as MediaAsset[]);
      },
      error: (error: Error) => {
        reject(error);
      }
    });
  });
};