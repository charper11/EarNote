import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({score, lessonKey, lessonUnit}) => {

    let passOrFail = "";

    // localStorage objects are {A1 : true}, {A2 : true}, etc...
    // check if score criteria is set
    if(localStorage.getItem('passCriteria')) {
      if(score >= localStorage.getItem('passCriteria')) {
        localStorage.setItem(lessonKey + lessonUnit.toString(), true);
        passOrFail = "you passed!";
      }
      else {
        passOrFail = "you did not score high enough, try again"
      }
    }
    else {
      localStorage.setItem(lessonKey + lessonUnit.toString(), true);
      passOrFail = "you passed!";
    }

    return (
        <div className='result'>
          <span className='score'> Score: {score}/10 </span>
          <p>{passOrFail}</p>
          <Link className='unitLink' to="/unit">Return to Unit {lessonUnit} Page</Link>
        </div>
    );
};

export default Result;