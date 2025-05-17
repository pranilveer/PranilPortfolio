import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import type { Project } from '../types/project.ts';

const projects: Project[] = [
  {
    title: 'E-commerce Website',
    description: 'A React-based e-commerce platform with payment integration.',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'A TypeScript app for managing tasks with drag-and-drop.',
    link: '#',
  },
];

const ProjectsSection: React.FC = () => (
  <Box sx={{ mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Button variant="contained" href={project.link} target="_blank" sx={{ mt: 2 }}>
                View Project
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default ProjectsSection;