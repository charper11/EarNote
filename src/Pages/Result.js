import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({score, lessonKey, lessonUnit}) => {

    // localStorage objects are {A1 : true}, {A2 : true}, etc...
    // check if score criteria is set
    if(localStorage.getItem('passCriteria')) {
      console.log("criteria set");
      if(score >= localStorage.getItem('passCriteria')) {
        localStorage.setItem(lessonKey + lessonUnit.toString(), true);
      }
      else {
        console.log("score too low");
      }
    }
    else {
      localStorage.setItem(lessonKey + lessonUnit.toString(), true);
    }

    return (
        <div className='result'>
          <span className='score'> Score: {score} </span>
          <Link className='unitLink' to="/">Return to Home Page</Link>
        </div>
    );
};

export default Result;