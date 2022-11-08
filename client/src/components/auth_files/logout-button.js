import React from "react";
import { useState, useEffect } from "react";

import { useAuth0, User } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  const [activeUser, setActiveUser] = useState([]);

  const getUser = async () => {
    // const response = await fetch(`http://localhost:5000/api/user`);
    // const currentUser = await response.json();
    setActiveUser(user);
  };

  useEffect(() => {
    getUser();
    console.log(activeUser, "users");
  }, [user]);

  return (
    <div className="logout">
      <div className="username">
      Hello,{activeUser && activeUser.given_name}
      </div>
      <div>
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
    </div>
  );
};

export default LogoutButton;
