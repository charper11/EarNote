import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = ({toggleSettings}) => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="navigation">
            <Link to="/" className="title">Ear Trainer</Link>
            <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  /> 
                </svg>
            </button>
            <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/guide">Guide</Link></li>
                    <li><button onClick={toggleSettings}>settings</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;