import React, { useState } from 'react';
import { Box, Container, Typography, Card, Dialog, DialogContent, IconButton } from '@mui/material';
import { FaPalette, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Replace require.context with Vite's glob import
// This finds all images in the folder and returns their URLs
const imageModules = import.meta.glob('../assets/images/art/*.{jpg,jpeg,png,gif}', { 
  eager: true, 
  import: 'default' 
});

const artImages = Object.values(imageModules) as string[];

const Art: React.FC = () => {
  // 2. No need for complex casting; react-icons work as standard components
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
          {/* Use the component directly */}
          <FaPalette size={40} />
          <Typography variant="h2" component="h2" sx={{ mt: 2 }}>
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
            {artImages.map((image, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02 }}>
                <Card 
                  sx={{ 
                    height: '100%', borderRadius: 2, boxShadow: 3, cursor: 'pointer',
                    position: 'relative', overflow: 'hidden' 
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Overlay to prevent dragging/right-click */}
                  <Box
                    sx={{ position: 'absolute', inset: 0, zIndex: 1 }}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  />
                  <Box
                    component="img"
                    src={image}
                    alt={`Art piece ${index + 1}`}
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
              alt="Art preview"
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