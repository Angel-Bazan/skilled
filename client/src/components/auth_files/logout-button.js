import React from "react";
import { useState, useEffect } from "react";

import { useAuth0, User } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  const [user, setUser] = useState([]);

  const getUser = async () => {
    const response = await fetch(`http://localhost:5000/api/user`);
    const user = await response.json();
    setUser(user);
  };

  useEffect(() => {
    getUser();
    console.log(user, "users");
  }, []);

  return (
    <div className="logout">
      {/* <div>
      <h3>Hello</h3>
      {user.firstname}
      </div> */}
      <button
        className="btn btn-danger btn-block"
        onClick={() =>
          logout({
            returnTo: window.location.origin,
          })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
