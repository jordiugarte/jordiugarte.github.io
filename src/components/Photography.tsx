import React, { useState } from 'react';
import { Box, Card, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Static imports for all photography images
const imageModules = import.meta.glob('../assets/images/photography/*.{jpg,jpeg,png,gif}', { 
  eager: true, 
  import: 'default' 
});

const photographyImages = Object.values(imageModules) as string[];

const Photography: React.FC = () => {
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
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 0',
          scrollMarginTop: '64px',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <FaCamera size={40} />
          <Typography variant="h2" component="h2" sx={{ mt: 2 }}>
            Photography
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 2,
            }}
          >
            {photographyImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6,
                      cursor: 'pointer',
                    },
                    position: 'relative',
                  }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      zIndex: 1,
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                    }}
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  />
                  <Box
                    component="img"
                    src={image}
                    alt={`Photography ${index + 1}`}
                    loading="lazy"
                    draggable="false"
                    sx={{
                      height: 300,
                      width: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                      pointerEvents: 'none',
                      userSelect: 'none',
                      WebkitUserSelect: 'none',
                      MozUserSelect: 'none',
                      msUserSelect: 'none',
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      <Dialog
        open={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'rgba(0, 0, 0, 0.9)',
            boxShadow: 24,
            borderRadius: 2,
            overflow: 'hidden',
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={() => setSelectedImage(null)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
          >
            <FaTimes />
          </IconButton>
          {selectedImage && (
            <Box
              component="img"
              src={selectedImage}
              alt="Photography preview"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: '80vh',
                objectFit: 'contain',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
              }}
              draggable="false"
              onContextMenu={handleContextMenu}
              onDragStart={handleDragStart}
            />
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default Photography;