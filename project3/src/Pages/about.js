import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

// Sample team data
const teamMembers = [
  { name: 'Emily Clark', position: 'Founder & CEO', image: '/images/emily.jpg' },
  { name: 'James Brown', position: 'Veterinarian', image: '/images/james.jpg' },
  { name: 'Sarah Parker', position: 'Animal Care Specialist', image: '/images/sarah.jpg' },
];

const About = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Organization Overview */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="h6" component="p">
            We are dedicated to rescuing and providing a safe haven for pets in need.
          </Typography>
        </Container>
      </Box>

      {/* Mission Statement */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Our mission is to rescue, rehabilitate, and rehome pets in need. We strive to create a community where every pet is loved and cared for.
        </Typography>
        <Typography variant="body1" component="p">
          We work tirelessly to ensure that every pet finds a loving forever home.
        </Typography>
      </Container>

      {/* Team Introduction */}
      <Box sx={{ backgroundColor: 'grey.200', py: 8 }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.position}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;

