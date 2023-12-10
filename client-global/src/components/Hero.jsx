import { useState } from "react";
import Home from "./pages/Home";
import LiveAuction from "./pages/LiveAuction";
import Flow from "./pages/Flow";
import Navbar from "./Navbar"; // Import your Navbar component

const Hero = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Assuming you have a function to handle login status changes
  const handleLogin = () => {
    // Logic to handle login status change
    setLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      {isLoggedIn ? null : <Home />}
      {isLoggedIn && <LiveAuction />}
      {isLoggedIn && <Flow />}
    </>
  );
};

export default Hero;
