import React, { useEffect } from 'react';
import { usePageTitle } from '../contexts/PageTitleContext';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Link } from '@mui/material';
import './Projects.css';  // Importing the custom CSS file

const Projects = () => {
  const { setTitle } = usePageTitle();

  useEffect(() => {
    setTitle('Projects');
  }, [setTitle]);

  const projects = [
    {
      name: 'Portfolio Website',
      desc: 'Personal site built using React and Material UI.',
      link: 'https://github.com/arslan-shahzad-01/portfolio'
    },
    {
      name: 'Nat Prep App',
      desc: 'An app designed to help students prepare for competitive exams with personalized study plans.',
      link: 'https://github.com/arslan-shahzad01/Nat-Prep-App'
    },
    {
      name: 'Provincial Census 2017',
      desc: 'A data analysis project focusing on the 2017 census data of Pakistan.',
      link: 'https://github.com/arslan-shahzad01/Provincial-Census-2017'
    }
  ];

  return (
    <Container className="projects-section">
      <Typography variant="h4" gutterBottom className="project-title">
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((proj, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="project-card">
              <CardContent>
                <Typography variant="h6">{proj.name}</Typography>
                <Typography variant="body2">{proj.desc}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} href={proj.link} target="_blank">
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
