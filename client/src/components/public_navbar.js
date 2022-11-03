import React from "react";
import AuthNav from './auth_files/auth-nav';

const Navbar = ({ setView }) => {
  //setView is a prop and we are passing it
  return (
    //replacing if statements taking turns rendering ('treated as buttons')

    <div className="navbar-container">
      <ul className="nav justify-content-end" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => setView("home")}
          >
            <h2>Home</h2>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link active"
            id="create-tab"
            data-toggle="tab"
            href="#create"
            role="tab"
            aria-controls="create"
            aria-selected="true"
            onClick={() => setView("about")}
          >
            <h2>About</h2>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link active"
            id="create-tab"
            data-toggle="tab"
            href="#create"
            role="tab"
            aria-controls="create"
            aria-selected="true"
            onClick={() => setView("trades")}
          >
            <h2>Trades</h2>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link active"
            id="favorites-tab"
            data-toggle="tab"
            href="#favorites"
            role="tab"
            aria-controls="favorites"
            aria-selected="true"
            onClick={() => setView("favorite")}
          >
            <h2>Favorites</h2>
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          
        </div>
        <div
          class="tab-pane fade show active"
          id="create"
          role="tabpanel"
          aria-labelledby="create-tab"
        >
          
        </div>
        <div
          class="tab-pane fade show active"
          id="favorites"
          role="tabpanel"
          aria-labelledby="favorites-tab"
        >
          
        </div>
      </div>
      <AuthNav />
    </div>
  );
};

export default Navbar;
