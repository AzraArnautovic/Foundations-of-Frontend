// src/Pages/Adopt.js
import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const Adopt = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Adopt a Pet
          </Typography>
          <Typography variant="h6">
            Find your new best friend and give a loving home to a pet in need.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          How to Adopt
        </Typography>
        <Typography variant="body1" paragraph>
          Adopting a pet is a wonderful experience. Here’s what you need to know to get started:
        </Typography>
        <ul>
          <li><Typography variant="body1">Browse through our featured pets below or visit our shelter to meet them in person.</Typography></li>
          <li><Typography variant="body1">Fill out an adoption application form and submit it to us.</Typography></li>
          <li><Typography variant="body1">Once approved, you can schedule a meet-and-greet with the pet you’re interested in.</Typography></li>
          <li><Typography variant="body1">Finalize the adoption process with the necessary paperwork and adoption fee.</Typography></li>
        </ul>
        <Typography variant="body1">
          We are here to help you through every step of the adoption process.
        </Typography>
      </Container>
    </Box>
  );
};

export default Adopt;
