import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IconBaseProps } from 'react-icons';

const Software: React.FC = () => {
  const Icon = FaCode as React.ComponentType<IconBaseProps>;
  
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
            Software Development
          </Typography>
        </Box>
        <Container maxWidth="lg">
          <Typography variant="body1" sx={{ textAlign: 'center', opacity: 0.8 }}>
            Coming soon...
          </Typography>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Software; 