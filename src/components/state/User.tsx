// import React from "react";
// type AuthUser = {
//   name: string;
//   email: string;
// };

// export const User = () => {
//   const [user, setUser] = React.useState<AuthUser | null | undefined>(null);
//   const handleLogin = () => {
//     setUser({
//       name: "Vishwas",
//       email: "vishwas@example.com",
//     });
//   };
//   const handleLogout = () => {
//     setUser(null);
//     setUser(undefined);
//   };
//   return (
//     <div>
//       <button onClick={handleLogin}> Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>User name is {user?.name}</div>
//       <div>User email is {user?.email}</div>
//     </div>
//   );
// };

// useState Type Assertion
import React from "react";
type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = React.useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}> Login</button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
