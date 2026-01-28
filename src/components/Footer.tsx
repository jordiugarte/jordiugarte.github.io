import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Link, IconButton, Tooltip, useTheme } from '@mui/material';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import type { IconBaseProps } from 'react-icons';
import { useMediaQuery } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  const [isBottom, setIsBottom] = useState(false);
  const Icon = FaEnvelope as React.ComponentType<IconBaseProps>;
  const LinkedInIcon = FaLinkedin as React.ComponentType<IconBaseProps>;
  const GithubIcon = FaGithub as React.ComponentType<IconBaseProps>;
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 100;
      setIsBottom(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactLinks = [
    {
      icon: Icon,
      href: 'mailto:jordi.ugarte@outlook.com',
      label: 'jordi.ugarte@outlook.com',
      tooltip: 'Email me',
    },
    {
      icon: LinkedInIcon,
      href: 'https://linkedin.com/in/jordi-ugarte',
      label: 'linkedin.com/in/jordi-ugarte',
      tooltip: 'Visit my LinkedIn',
    },
    {
      icon: GithubIcon,
      href: 'https://github.com/jordiugarte',
      label: 'github.com/jordiugarte',
      tooltip: 'Visit my GitHub',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: isBottom ? theme.palette.background.paper : (theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255,255,255,0.85)'),
        backdropFilter: isBottom ? 'none' : 'blur(10px)',
        borderTop: '1px solid #ffffff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '64px',
        boxShadow: '0px -4px 8px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Jordi Ugarte. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {contactLinks.map((link, index) => (
              isMobile ? (
                <Tooltip key={index} title={link.tooltip} placement="top">
                  <IconButton
                    component="a"
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    color="inherit"
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'scale(1.1)',
                      },
                      transition: 'all 0.2s ease-in-out',
                      transform: 'scale(1)',
                      padding: '12px',
                      margin: '0 4px',
                    }}
                  >
                    <link.icon size={24} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Link
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  color="inherit"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'primary.main',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s ease-in-out',
                    transform: 'scale(1)',
                    padding: '8px 12px',
                    margin: '0 4px',
                  }}
                >
                  <link.icon size={20} />
                  <Typography variant="body2">{link.label}</Typography>
                </Link>
              )
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 