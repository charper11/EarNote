import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Unit = ({fetchQuestions, setScore, unit}) => {

    const keys = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
    const navigate = useNavigate();

    const handleClick = (key) => {
      fetchQuestions(key);
      setScore(0);
      navigate("/lesson");
    }

    return (
        <div>
          <span>Unit Page {unit}</span>
          {keys.map((key) => (
              <Button key={key} onClick={() => handleClick(key)} >{key}</Button>
            ))}
        </div>
    );
};

export default Unit;