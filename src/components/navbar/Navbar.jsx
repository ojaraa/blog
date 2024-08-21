import { useState } from "react";
import { GiBigWave } from "react-icons/gi";
import { GiAbstract020 } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <Link to={`/`}>
          <div className="logo">
            {/* <GiBigWave className="logo-icon" /> */}
            <GiAbstract020 className="logo-icon" />
            <h1>Nova</h1>
          </div>
        </Link>
        <nav>
          <ul className={menuOpen ? "#navbar active" : "#navbar"} id="navbar">
            <li>Categories</li>
            <Link to={`/discover`}>
              <li>Discover</li>
            </Link>
          </ul>
        </nav>

        <div className="nav-icon" onClick={handleToggle}>
              {menuOpen ? (
                <IoMenu className="iconn" />
              ) : (
                <IoClose className="iconn" />
              )}
            </div>
      </header>
    </>
  );
}

export default Navbar;
