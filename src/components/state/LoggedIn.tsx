import React from "react";

export const LoggedIn = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}> Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? `logged in` : `logged out`}</div>
    </div>
  );
};
