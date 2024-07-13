import { Home, Menu, Phone, User, X } from "lucide-react";
import "./App.css";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [navClick, setNavClick] = useState(false);
  const handleClick = () => {
    console.log("CLicked");
    setNavClick(!navClick);
  };
  return (
    <>
      <div
        className={clsx("container", {
          "show-nav": navClick,
        })}
      >
        <div className="nav-container">
          <div className="nav-circle">
            {!navClick ? (
              <button id="menu" onClick={handleClick}>
                <Menu style={{ height: 40, width: 40 }} />
              </button>
            ) : (
              <button id="cross" onClick={handleClick}>
                <X className="cross-icon" style={{ height: 38, width: 38 }} />
              </button>
            )}
          </div>
        </div>
        <div className="content">
          <h1>We gon make it one day</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            hic numquam, itaque, non fuga mollitia incidunt laudantium beatae
            impedit debitis laborum! Omnis, fugit! Impedit accusantium porro
            nemo. Nobis, earum possimus accusantium reiciendis nostrum voluptas
            labore quaerat corrupti rem, deserunt quidem et, adipisci tempora
            quos perspiciatis cupiditate veritatis repellendus! Quasi magni
            eaque repellat ratione, laboriosam amet! Eveniet temporibus culpa
            dolorem sint iusto aperiam quasi dolores odit cum iure omnis tempore
            placeat dolorum numquam rerum facere ab error odio nulla, iste
            ratione. Natus quaerat beatae voluptatem aliquid qui nostrum enim
            minima ipsum officiis. Quis quaerat dolor maxime velit excepturi
            repudiandae, magni laborum.
          </p>
          <h2>Get going</h2>
          <img
            src="https://i.pinimg.com/564x/99/11/1a/99111a3497d9b24e7a4e6fd356de6c87.jpg"
            className="inspire"
          />
        </div>
      </div>

      <nav
        className={clsx("nav-menu", {
          show: navClick,
        })}
      >
        <ul>
          <li>
            <Home /> Home
          </li>
          <li>
            <User /> About Us
          </li>
          <li>
            <Phone /> Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
