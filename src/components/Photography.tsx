import React, { useState } from 'react';
import { Box, Card, CardMedia, Container, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import { FaCamera, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Static imports for all photography images
import img20250403 from '../assets/images/art/IMG_2025_04_03_1559409762.jpg';
import img20240922_170209 from '../assets/images/art/IMG_2024_09_22_170209.jpg';
import img20240922_170146 from '../assets/images/art/IMG_2024_09_22_170146.jpg';
import img20240922_170120 from '../assets/images/art/IMG_2024_09_22_170120.jpg';
import img20240904_140238 from '../assets/images/art/IMG_2024_09_04_140238.jpg';
import img20240904_135026 from '../assets/images/art/IMG_2024_09_04_135026.jpg';
import img20240904_135008 from '../assets/images/art/IMG_2024_09_04_135008.jpg';
import img20240904_134218 from '../assets/images/art/IMG_2024_09_04_134218.jpg';
import img20240904_134211 from '../assets/images/art/IMG_2024_09_04_134211.jpg';
import img20240904_134152 from '../assets/images/art/IMG_2024_09_04_134152.jpg';

const photographies = [
  img20250403,
  img20240922_170209,
  img20240922_170146,
  img20240922_170120,
  img20240904_140238,
  img20240904_135026,
  img20240904_135008,
  img20240904_134218,
  img20240904_134211,
  img20240904_134152,
];

const photographyDescriptions: string[] = photographies.map((_, i) => `Photography ${i + 1}`);

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
                  <CardMedia
                    component="img"
                    image={image}
                    alt={photographyDescriptions[index]}
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