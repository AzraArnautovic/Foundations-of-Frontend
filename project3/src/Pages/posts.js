import React, { useState, useEffect } from "react";
import { Typography, Box, Container, Grid, Card, CardContent, Button } from "@mui/material";
import { Link } from 'react-router-dom';

// Fetching posts data from JSONPlaceholder for demonstration
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data.slice(0, 5); // Limit to 5 posts
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" component="h1">
            Blog
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    June 1, 2024 by Author Name {/* Static date and author for demonstration */}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {post.body}
                  </Typography>
                  <Button component={Link} to={`/posts/${post.id}`} variant="contained" color="primary" sx={{ mt: 2 }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Posts;

