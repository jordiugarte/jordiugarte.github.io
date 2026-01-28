import './App.css'

import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box, Container, Typography, AppBar, Toolbar, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { FaCamera, FaMusic, FaPalette, FaBars } from 'react-icons/fa'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { darkTheme, lightTheme } from './theme'
import type { IconBaseProps } from 'react-icons'

import Photography from './components/Photography'
import Music from './components/Music'
import Art from './components/Art'
import Footer from './components/Footer'

const sections = [
  // { Icon: FaCode, id: 'software', path: '/software', title: 'Software', size: 24 },
  // { Icon: FaGamepad, id: 'games', path: '/games', title: 'Games', size: 24 },
  { Icon: FaCamera, id: 'photography', path: '/photography', title: 'Photography', size: 20 },
  { Icon: FaMusic, id: 'music', path: '/music', title: 'Music', size: 20 },
  { Icon: FaPalette, id: 'art', path: '/art', title: 'Art', size: 20 },
];

const Navigation = () => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');
  const location = useLocation();
  const MenuIcon = FaBars as React.ComponentType<IconBaseProps>;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" sx={{ 
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: isScrolled
        ? (theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255,255,255,0.85)')
        : theme.palette.background.paper,
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid #ffffff',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
      height: '64px',
      transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
    }}>
      <Toolbar sx={{ 
        justifyContent: 'space-between',
        minHeight: '64px !important',
        height: '64px',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon size={20} />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '0.1em',
              fontSize: '1.2rem',
              whiteSpace: 'nowrap',
            }}
          >
            Home
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {sections.map((section) => (
              <Typography
                key={section.id}
                component={Link}
                to={section.path}
                variant="body1"
                sx={{
                  color: location.pathname === section.path ? 'primary.main' : 'inherit',
                  textDecoration: 'none',
                  fontWeight: location.pathname === section.path ? 700 : 500,
                  fontSize: '1.1rem',
                  letterSpacing: '0.05em',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  backgroundColor: location.pathname === section.path ? 'rgba(255,255,255,0.08)' : 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    transform: 'scale(1.05)',
                  },
                  transform: location.pathname === section.path ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'pointer',
                }}
              >
                {section.title}
              </Typography>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ 
          bgcolor: theme.palette.background.default, 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Navigation />
          <Box sx={{ 
            pt: '64px',
            pb: '64px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Routes>
              <Route path="/" element={
                <Container maxWidth="lg" sx={{ py: 4 }}>
                  <Typography variant="h1" component="h1" sx={{ textAlign: 'center' }}>
                    Hi, my name is Jordi Ugarte
                  </Typography>
                  <Typography variant="h5" sx={{ textAlign: 'center', mt: 2, opacity: 0.8 }}>
                    Software Engineer & Artist
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'center', mt: 4, maxWidth: '800px', mx: 'auto', lineHeight: 1.8 }}>
                    Born in 1999, Bolivia. Engineer, designer and videogame enthusiast. I believe art and design are not choices, but rather necessities to have more human experiences on everywhere we interact with.
                  </Typography>
                </Container>
              } />
              {/* <Route path="/software" element={<Software />} /> */}
              {/* <Route path="/games" element={<Games />} /> */}
              <Route path="/photography" element={<Photography />} />
              <Route path="/music" element={<Music />} />
              <Route path="/art" element={<Art />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;