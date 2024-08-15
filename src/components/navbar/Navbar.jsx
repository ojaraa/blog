import { GiBigWave } from "react-icons/gi";
import { GiAbstract020 } from "react-icons/gi";
import './Navbar.css'
function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                {/* <GiBigWave className="logo-icon" /> */}
                <GiAbstract020 className="logo-icon" />
                <h1>Nova</h1>
            </div>
            <ul className="nav-menu">
                <li>Categories</li>
                <li>Discover</li>
                {/* <li>About</li> */}
            </ul>
        </nav>

    </>
  )
}

export default Navbar