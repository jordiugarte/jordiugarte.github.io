import { colors } from '../theme';

export const commonStyles = {
  pageContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: 'background.main',
  },
  contentContainer: {
    pt: '64px',
    pb: '64px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    textAlign: 'left',
    mb: 1,
  },
  sectionSubtitle: {
    textAlign: 'left',
    mt: 2,
    opacity: 0.8,
  },
  bodyText: {
    lineHeight: 1.8,
  },
  imageContainer: {
    flex: { xs: '1 1 100%', md: '0 0 300px' },
    display: 'flex',
    justifyContent: 'center',
  },
  roundedImage: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  navigationButton: {
    color: 'inherit',
    transform: 'scale(1)',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: colors.hover.primary,
    },
    '&.Mui-selected': {
      color: colors.primary,
    },
    padding: '8px',
  },
} as const;

export type CommonStyles = typeof commonStyles; 