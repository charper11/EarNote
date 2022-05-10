import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({score}) => {
    return (
        <div className='result'>
          <span className='score'> Score: {score} </span>
          <Link className='unitLink' to="/unit">Return to Unit Page</Link>
        </div>
    );
};

export default Result;