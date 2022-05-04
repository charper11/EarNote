import { Button } from '@mui/material';
import { useState } from 'react';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    setScore,
    score,
}) => {

    //const [selected, setSelected] = useState();

    const handleNext = () => {
        setCurrQues(currQues + 1);
    };

    const handlePlay = () => {
        var audio = new Audio(questions[currQues].questionAudio);
        audio.play();
    };

    const handleSelect = (path) => {
        var audio = new Audio(path);
        audio.play();
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
                    onClick={() => handleSelect(options.optionAudio)}
                  >
                      {options.option}
                  </button>
              ))}

              <Button onClick={handleNext}>Next</Button>
        </div>
    );
};

export default Question;