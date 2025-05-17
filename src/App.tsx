import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Switch, Container, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AboutSection from './components/about-section';
import ProjectsSection from './components/projects-section';
import SkillsSection from './components/skills-section';
import ContactSection from './components/contact-section';
import BackgroundAnimation from './components/background-animation';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#dc004e' },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
        <BackgroundAnimation darkMode={darkMode} />
        <AppBar position="static" sx={{ zIndex: 1 }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Your Name
            </Typography>
            <IconButton onClick={toggleTheme} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Switch checked={darkMode} onChange={toggleTheme} />
          </Toolbar>
        </AppBar>
        <Container sx={{ py: 4, position: 'relative', zIndex: 1 }}>
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;