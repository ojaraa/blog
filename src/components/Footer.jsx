import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer>
        <div className="footer-details">
            <p>ABOUT</p>
            <p>&copy; 2024 Nova. All rights reserved.</p>
        </div>
        <div className="footer-icons">
            <a href="https://github.com/ojaraa" target="_blank"><GrGithub /></a>
            <a href="https://www.linkedin.com/in/okereke-favour-230234198/" target="_blank"><FaLinkedin /></a>
            
        </div>
    </footer>
  )
}

export default Footer