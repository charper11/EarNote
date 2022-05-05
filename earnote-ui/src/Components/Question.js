import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    setScore,
    score,
}) => {

    const [selected, setSelected] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const navigate = useNavigate();

    const handleNext = () => {
        if(currQues > 2) {
            navigate("/result");
        }
        else if(isSelected) {
            if(selected) setScore(score + 1);
            setCurrQues(currQues + 1);
            setSelected();
            setIsSelected(false);
        }
    };

    const handlePlay = () => {
        var audio = new Audio(questions[currQues].questionAudio);
        audio.play();
    };

    const handleSelect = (option) => {
        var audio = new Audio(option.optionAudio);
        audio.play();
        setSelected(option.isCorrect);
        setIsSelected(true);
    };

    return (
        <div>
            <h1>Question {currQues + 1} :</h1>
            <h2>{questions[currQues].questionText}</h2>
            <Button onClick={handlePlay}>Play</Button>

            {questions[currQues].answerOptions &&
              questions[currQues].answerOptions.map((options) => (
                  <button
                    key={options.option}
                    onClick={() => handleSelect(options)}
                  >
                      {options.option}
                  </button>
              ))}

              <Button onClick={handleNext} disabled={!(isSelected)}>Submit</Button>
        </div>
    );
};

export default Question;