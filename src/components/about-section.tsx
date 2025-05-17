import { Box, Typography } from '@mui/material';

const AboutSection: React.FC = () => (
  <Box sx={{ mb: 6, textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1">
      I'm a passionate web developer specializing in React, TypeScript, and MUI. I build responsive,
      user-friendly applications and have experience with freelance projects like e-commerce platforms.
    </Typography>
  </Box>
);

export default AboutSection;