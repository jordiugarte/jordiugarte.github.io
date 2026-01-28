import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaMusic } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { IconBaseProps } from 'react-icons';

const albums = [
  {
    title: 'Soltar el Mar',
    url: 'https://open.spotify.com/album/1o9xNfMrEluJsMrp2vvptT?si=ApQteKR_TcuUkuHtXKU33g',
  },
  {
    title: 'Lapse of Time',
    url: 'https://open.spotify.com/album/1eru1CSZUtTcDtQHb5NIuC?si=xF0qSVFxT1eFmCHPGkw48Q',
  },
  {
    title: 'ARCEPRADOPEREZ',
    url: 'https://open.spotify.com/album/4qjYt2ZTD0UXpnbXQz4GL1?si=ZNWy2ge4TZWNRaoewvfKcw',
  },
  {
    title: 'Fausse Idole',
    url: 'https://open.spotify.com/album/4GHYzV7w2zGjamNBNKqPgt?si=egMMrS6iQW6J4FB0MdPpmw',
  },
];

const Music: React.FC = () => {
  const Icon = FaMusic as React.ComponentType<IconBaseProps>;
  
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
          <Icon size={40} />
          <Typography variant="h2" component="h2" sx={{ mt: 2 }}>
            Music
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
              },
              gap: 3,
            }}
          >
            {albums.map((album, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Box
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <iframe
                    title={`Spotify album: ${album.title}`}
                    src={`https://open.spotify.com/embed/album/${album.url.split('/').pop()?.split('?')[0]}`}
                    width="100%"
                    height="352"
                    style={{ border: 0 }}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </Box>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Music; 