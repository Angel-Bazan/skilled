import React from "react";
import { useState, useEffect } from "react";

import { useAuth0, User } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { user, logout } = useAuth0();

  const [activeUser, setActiveUser] = useState([]);

  const getUser = async () => {
<<<<<<< HEAD
    // const response = await fetch(`http://localhost:5000/api/user`);
    // const currentUser = await response.json();
=======
    // const response = await fetch(`/api/user`);
    // const user = await response.json();
>>>>>>> skilled
    setActiveUser(user);
  };

  useEffect(() => {
    getUser();
    console.log(activeUser, "users");
<<<<<<< HEAD
  }, [user]);

  return (
    <div className="logout">
      <div className="username">
      Hello,{activeUser && activeUser.given_name}
      </div>
      <div>
=======
  }, []);

  return (
    <div className="logout">
      
      <div className="name">
        <h5>Hello {activeUser && activeUser.given_name}</h5>
      </div>
      <div className="logoutB">
>>>>>>> skilled
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
