import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection: React.FC = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton href="https://github.com/yourusername" target="_blank">
        <GitHubIcon />
      </IconButton>
      <IconButton href="https://linkedin.com/in/yourusername" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton href="mailto:your.email@example.com">
        <EmailIcon />
      </IconButton>
    </Box>
  </Box>
);

export default ContactSection;