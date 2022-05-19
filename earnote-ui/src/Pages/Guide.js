import { Link } from 'react-router-dom';
import './Guide.css';
import CircleOfFifths from '../Components/CircleOfFifths';

const Guide = () => {

    return (
        <div className="guide">
          <h1>Guide</h1>
          <h2>The Circle of Fifths</h2>
          <CircleOfFifths />
          <h2>Scale</h2>
          <h2>Triads</h2>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default Guide;