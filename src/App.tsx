import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography, IconButton, Switch, Container } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AboutSection from './components/about-section.tsx';
import ProjectsSection from './components/projects-section.tsx';
import SkillsSection from './components/skills-section.tsx';
import ContactSection from './components/contact-section.tsx';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#1976d2' },
      secondary: { main: '#dc004e' },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
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
      <Container sx={{ py: 4 }}>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;