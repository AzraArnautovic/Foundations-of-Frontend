import React, { useState, useEffect } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => setPosts(data.slice(0, 5))); // Limit to 5 posts
  }, []);

  return (
    <div>
      <h2>Posts Page</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
