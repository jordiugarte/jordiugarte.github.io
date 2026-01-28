import React, { useState } from 'react';
import { Box, Card, CardMedia, Container, Typography } from '@mui/material';
import { FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Static imports (replace paths as needed)
import img1 from '../assets/images/art/IMG_2025_04_03_1559409762.jpg';
import img2 from '../assets/images/art/IMG_2024_09_22_170209.jpg';
// ... import the rest

const photographies = [img1, img2]; // Add all imported variables here

const photographyDescriptions: string[] = photographies.map((_, i) => `Photography ${i + 1}`);

const Photography: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Use the icons directly as components
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <FaCamera size={40} />
        <Typography variant="h2">Photography</Typography>
        
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2 }}>
            {photographies.map((image, index) => (
              <Card key={index} onClick={() => setSelectedImage(image)}>
                <CardMedia
                  component="img"
                  image={image} // 'image' is now a resolved string path
                  alt={photographyDescriptions[index]}
                  sx={{ height: 300, objectFit: 'cover' }}
                />
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Dialog logic remains the same */}
    </motion.div>
  );
};

export default Photography;