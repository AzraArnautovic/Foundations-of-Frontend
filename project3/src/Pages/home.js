import React, { useState, useEffect } from "react";

function Home() {
  const [message, setMessage] = useState("Welcome to the Home Page");

  useEffect(() => {
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{message}</p>
    </div>
  );
}

export default Home;
