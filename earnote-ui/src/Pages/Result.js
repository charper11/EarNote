import { Button } from '@mui/material';

const Result = ({score}) => {
    return (
        <div>
          <span>Result Page</span>
          <span> Score: {score} </span>
          <Button href="/unit">Return to Unit Page</Button>
        </div>
    );
};

export default Result;