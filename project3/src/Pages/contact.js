import React, { useState } from 'react';
import { Typography, Box, Container, Grid, TextField, Button, FormControl, FormHelperText } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission logic here
      console.log('Form submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Contact Us
          </Typography>
        </Container>
      </Box>

      {/* Contact Form */}
      <Container sx={{ py: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.name}>
                <TextField
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormHelperText>{errors.name}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.email}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormHelperText>{errors.email}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.message}>
                <TextField
                  label="Message"
                  variant="outlined"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <FormHelperText>{errors.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Contact Information */}
      <Container sx={{ py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          123 Pet Rescue Lane, Animal City, AC 12345
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: +1 (800) 123-4567
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: contact@petrescue.org
        </Typography>
      </Container>
    </Box>
  );
};

export default Contact;
