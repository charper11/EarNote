import { Link } from 'react-router-dom';
import './Guide.css';

const Guide = () => {

    return (
        <div className="guide">
          <h2>Guide</h2>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default Guide;