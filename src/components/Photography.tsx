import React, { useState } from 'react';
import { Box, Card, CardMedia, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconBaseProps } from 'react-icons';

const photographies = [
  require('../assets/images/art/IMG_2025_04_03_1559409762.jpg'),
  require('../assets/images/art/IMG_2024_09_22_170209.jpg'),
  require('../assets/images/art/IMG_2024_09_22_170146.jpg'),
  require('../assets/images/art/IMG_2024_09_22_170120.jpg'),
  require('../assets/images/art/IMG_2024_09_04_140238.jpg'),
  require('../assets/images/art/IMG_2024_09_04_135026.jpg'),
  require('../assets/images/art/IMG_2024_09_04_135008.jpg'),
  require('../assets/images/art/IMG_2024_09_04_134218.jpg'),
  require('../assets/images/art/IMG_2024_09_04_134211.jpg'),
  require('../assets/images/art/IMG_2024_09_04_134152.jpg'),
];

// Add descriptions for each photography image
const photographyDescriptions: string[] = photographies.map((_, i) => `Photography ${i + 1}`);

const Photography: React.FC = () => {
  const Icon = FaCamera as React.ComponentType<IconBaseProps>;
  const CloseIcon = FaTimes as React.ComponentType<IconBaseProps>;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };
  
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
          <Icon size={40} />
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
            {photographies.map((image, index) => (
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
                  onClick={() => handleImageClick(image)}
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
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Art piece ${index + 1}`}
                    sx={{
                      height: 300,
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
                    draggable="false"
                  />
                </Card>
              </motion.div>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Focused image modal */}
      <Dialog
        open={!!selectedImage}
        onClose={handleClosePreview}
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
            onClick={handleClosePreview}
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
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
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
              <Typography variant="body1" color="white" sx={{ mt: 2, textAlign: 'center', opacity: 0.85 }}>
                {photographyDescriptions[photographies.indexOf(selectedImage)]}
              </Typography>
            </Box>
          )}
        </DialogContent>
      </Dialog>
      {/* End focused image modal */}
    </motion.div>
  );
};

export default Photography; 