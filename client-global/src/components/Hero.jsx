import { useState } from "react";
import Home from "./pages/Home";
import LiveAuction from "./pages/LiveAuction";

import Navbar from "./Navbar";

const Hero = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Assuming you have a function to handle login status changes
  const handleLogin = () => {
    // Logic to handle login status change
    setLoggedIn(isLoggedIn => !isLoggedIn);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
      {isLoggedIn ? null : <Home />}
      {isLoggedIn && <LiveAuction />}
    </>
  );
};

export default Hero;
