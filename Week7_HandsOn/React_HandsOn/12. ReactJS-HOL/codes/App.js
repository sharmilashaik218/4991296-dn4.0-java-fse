import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login status
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Element variable for conditional rendering
  let page;
  if (isLoggedIn) {
    page = <UserPage />;
  } else {
    page = <GuestPage />;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>✈️ Ticket Booking App</h1>

      {/* Conditional Buttons */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {/* Conditional Page Display */}
      <hr />
      {page}
    </div>
  );
}

export default App;
