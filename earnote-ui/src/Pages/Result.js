import { Link } from 'react-router-dom';

const Result = ({score}) => {
    return (
        <div>
          <span>Result Page</span>
          <span> Score: {score} </span>
          <Link to="/unit">Return to Unit Page</Link>
        </div>
    );
};

export default Result;