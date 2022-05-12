import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({toggleSettings}) => {

    return (
        <div className="header">
            <Link to="/" className="title">Ear Trainer</Link>
            About Guide
            <button onClick={toggleSettings}>settings</button>
            <hr className="divider" />
        </div>
    );
};

export default Header;