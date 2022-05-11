import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="title">Ear Trainer</Link>
            About Guide Settings
            <hr className="divider" />
        </div>
    );
};

export default Header;