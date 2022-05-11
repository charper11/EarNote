import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({score, lessonKey, lessonUnit}) => {

    // localStorage objects are {A1 : true}, {A2 : true}, etc...
    localStorage.setItem(lessonKey + lessonUnit.toString(), true);

    return (
        <div className='result'>
          <span className='score'> Score: {score} </span>
          <Link className='unitLink' to="/">Return to Home Page</Link>
        </div>
    );
};

export default Result;