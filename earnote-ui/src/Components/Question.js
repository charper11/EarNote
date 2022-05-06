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
    const [submitOrNext, setSubmitOrNext] = useState("submit");

    const navigate = useNavigate();

    const handleNext = () => {
        if(submitOrNext === "submit"){
            setSubmitOrNext("next");
            if(selected) setScore(score + 1);
        }
        else if(currQues > 2) {
            navigate("/result");
        }
        else {
            setCurrQues(currQues + 1);
            setSelected();
            setIsSelected(false);
            setSubmitOrNext("submit");
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
            <Button
              href="/unit">
              Quit
            </Button>
            <h1>Question {currQues + 1} :</h1>
            <h2>{questions[currQues].questionText}</h2>
            <Button onClick={handlePlay}>Play</Button>

            {questions[currQues].answerOptions &&
              questions[currQues].answerOptions.map((options) => (
                  <button
                    key={options.option}
                    onClick={() => handleSelect(options)}
                    disabled={submitOrNext==="next"}
                  >
                      {options.option}
                  </button>
              ))}

              <Button onClick={handleNext} disabled={!(isSelected)}>{submitOrNext}</Button>
        </div>
    );
};

export default Question;