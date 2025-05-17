import { Box, Typography, Button } from '@mui/material';

const skills: string[] = ['React', 'TypeScript', 'MUI', 'JavaScript', 'HTML', 'CSS', 'Node.js'];

const SkillsSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      Skills
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {skills.map((skill, index) => (
        <Button variant="outlined" key={index}>
          {skill}
        </Button>
      ))}
    </Box>
  </Box>
);

export default SkillsSection;