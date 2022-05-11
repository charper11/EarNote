import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Roadmap from '../Components/Roadmap.js';

const Home = ({fetchQuestions, setScore, setLessonKey}) => {

  const navigate = useNavigate();

  /*
  const handleClick = (i) => {
    setUnit(i);
    navigate("/unit");
  }

  <Button onClick={() => handleClick(1)}>Unit 1 (beginner)</Button>


  /*
            <Roadmap 
            fetchQuestions={fetchQuestions}
            setScore={setScore}
            setUnit={setUnit}
            setLessonKey={setLessonKey}
          />
  */

    return (
        <div>
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={1}
          />
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={2}
          />
        </div>
    );
};

export default Home;