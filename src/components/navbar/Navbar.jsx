import { GiBigWave } from "react-icons/gi";
import { GiAbstract020 } from "react-icons/gi";
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <>
        <nav>
          <Link to={`/`}>
            <div className="logo">
                {/* <GiBigWave className="logo-icon" /> */}
                <GiAbstract020 className="logo-icon" />
                <h1>Nova</h1>
            </div>
            </Link>
            {/* <ul className="nav-menu">
                <li>Categories</li>
                <li>Discover</li>
                
            </ul> */}
        </nav>

    </>
  )
}

export default Navbar