import "./App.css";
import { useState } from "react";
import Trades from "./components/trades";
import Navbar from "./components/public_navbar";
import Favorite from "./components/favorite";
import Form from "./components/form";
import Home from "./components/home"
import About from"./components/about";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/auth_files/loading";

function App() {
  const [view, setView] = useState("home");
  const { isLoading } = useAuth0();
  const { user } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  console.log("user", user);
  return (
    <div>
      {!user ? (
        <div>
          <div id="app" className="d-flex flex-column h-100">
            <Navbar setView={setView} />
            
            {view === "home" && <Home setView={setView} />}
            {view === "trades" && <Trades />}
            <div className="container flex-grow-1"> </div>{" "}
          </div>
        </div>
      ) : (
        <div>
          <div id="app" className="d-flex flex-column h-100">
            <Navbar setView={setView} />
            {view === "favorite" && <Favorite />}
            {view === "home" && <Home setView={setView}/>}
            {view === "trades" && <Trades />}
            {view === "about" && <About />}
            <div className="container flex-grow-1"> </div>{" "}
          </div>
        </div>
      )}

    </div>
    // <div id="app" className="d-flex flex-column h-100">
    //  <Navbar setView={setView}/>
    // {view === 'favorite' && <Favorite />}
    // {view === 'home' && <Blogs />}
    // {view === 'blogs'&& < Form />}

    //  <div className="container flex-grow-1">
    //  </div>
    // </div>
  );
}

export default App;
