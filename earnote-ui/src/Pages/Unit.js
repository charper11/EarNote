import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Unit = ({fetchQuestions}) => {

    const keys = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#", "G"];
    const navigate = useNavigate();

    const handleClick = (key) => {
      fetchQuestions(key);
      navigate("/lesson");
    }

    return (
        <div>
          <span>Unit Page</span>
          {keys.map((key) => (
              <Button key={key} onClick={() => handleClick(key)} >{key}</Button>
            ))}
        </div>
    );
};

export default Unit;