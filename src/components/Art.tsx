import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Card, Dialog, DialogContent, IconButton } from '@mui/material';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { MediaAsset } from '../model/MediaAsset';
import { loadMediaFromCSV } from '../utils/LoadMediaFromCSV';

const Art: React.FC = () => {
  const [assets, setAssets] = useState<MediaAsset[]>([])

  useEffect(() => {
    loadMediaFromCSV('art.csv')
      .then(data => setAssets(data))
      .catch(err => console.error("Loading failed", err));
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleContextMenu = (e: React.MouseEvent) => e.preventDefault();
  const handleDragStart = (e: React.DragEvent) => e.preventDefault();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '4rem 0',
          scrollMarginTop: '64px',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h1" component="h1" sx={{ mt: 2 }}>
            Art
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {assets.map((image, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}>
                <Card 
                  sx={{ 
                    height: '100%', borderRadius: 2, boxShadow: 3, cursor: 'pointer',
                    position: 'relative', overflow: 'hidden' 
                  }}
                  onClick={() => setSelectedImage(`/images/art/art${image.id}.jpg`)}
                >
                  {/* Overlay to prevent dragging/right-click */}
                  <Box
                    sx={{ position: 'absolute', inset: 0, zIndex: 1 }}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  />
                  <Box
                    component="img"
                    src={`/images/thumbnails/art/art${image.id}.jpg`}
                    alt={image.description}
                    loading="lazy"
                    draggable="false"
                    sx={{ height: 300, width: '100%', objectFit: 'cover' }}
                  />
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} maxWidth="lg" fullWidth>
        <DialogContent sx={{ p: 0, position: 'relative', bgcolor: 'black' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'white', zIndex: 10 }}
          >
            <FaTimes />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt={selectedImage}
              sx={{ width: '100%', maxHeight: '90vh', objectFit: 'contain' }}
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
            />
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Art;