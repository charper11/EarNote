import { Link } from 'react-router-dom';
import './Result.css';

const Result = ({score, lessonKey, lessonUnit, langObj}) => {

    let passOrFail = "";

    // localStorage objects are {A1 : true}, {A2 : true}, etc...
    // check if score criteria is set
    if(localStorage.getItem('passCriteria')) {
      if(score >= localStorage.getItem('passCriteria')) {
        localStorage.setItem(lessonKey + lessonUnit.toString(), true);
        passOrFail = langObj.Lesson.passed;
      }
      else {
        passOrFail = langObj.Lesson.failed;
      }
    }
    else {
      localStorage.setItem(lessonKey + lessonUnit.toString(), true);
      passOrFail = langObj.Lesson.passed;
    }

    return (
        <div className='result'>
          <span className='score'> {langObj.score}: {score}/10 </span>
          <p>{passOrFail}</p>
          <Link className='unitLink' to="/unit">{langObj.Lesson.return} {lessonUnit} {langObj.Lesson.page}</Link>
        </div>
    );
};

export default Result;