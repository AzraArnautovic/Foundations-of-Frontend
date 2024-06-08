import React, { useState } from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const featuredPets = [
  { id: 1, name: 'Bella', age: 2, image: '/images/r.jpg', description: 'Bella is a playful pup looking for a loving home. She loves belly rubs and long walks.' },
  { id: 2, name: 'Max', age: 3, image: '/images/dog2.jpg', description: 'Max is a friendly and energetic dog. He enjoys playing fetch and cuddling on the couch.' },
  { id: 3, name: 'Charlie', age: 1, image: '/images/dog3.jpg', description: 'Charlie is a curious and adventurous pup. He loves exploring new places and making new friends.' },
];

const Home = () => {
  const [openPetDialog, setOpenPetDialog] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [openEventDialog, setOpenEventDialog] = useState(false);

  const handleClickOpen = (pet) => {
    setSelectedPet(pet);
    setOpenPetDialog(true);
  };

  const handleClosePetDialog = () => {
    setOpenPetDialog(false);
    setSelectedPet(null);
  };

  const handleOpenEventDialog = () => {
    setOpenEventDialog(true);
  };

  const handleCloseEventDialog = () => {
    setOpenEventDialog(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Banner */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Our Pet Rescue
          </Typography>
          <Typography variant="h6" component="p">
            Find your new best friend and give a pet a loving home!
          </Typography>
        </Container>
      </Box>

      {/* Featured Pets */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Pets for Adoption
        </Typography>
        <Grid container spacing={4}>
          {featuredPets.map((pet) => (
            <Grid item key={pet.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ height: 300, objectFit: 'cover' }}  // Adjusting image to fit within the container
                  image={pet.image}
                  alt={pet.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {pet.age} years
                  </Typography>
                  <Button onClick={() => handleClickOpen(pet)} variant="contained" color="primary" sx={{ mt: 2 }}>
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Special Events */}
      <Box sx={{ backgroundColor: 'secondary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            Upcoming Events
          </Typography>
          <Typography variant="h6" component="p">
            Join us for our next adoption event!
          </Typography>
          <Button onClick={handleOpenEventDialog} variant="contained" color="primary" sx={{ mt: 4 }}>
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Pet Details Dialog */}
      <Dialog open={openPetDialog} onClose={handleClosePetDialog}>
        <DialogTitle>{selectedPet?.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedPet?.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePetDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Event Details Dialog */}
      <Dialog open={openEventDialog} onClose={handleCloseEventDialog}>
        <DialogTitle>Upcoming Event Details</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Join us for a fun-filled day at the park, where you can meet our adorable pets and learn more about our rescue work.
            There will be games, food stalls, and plenty of opportunities to find your new best friend!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEventDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
