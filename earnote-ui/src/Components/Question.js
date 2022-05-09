import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
        else if(currQues > 8) {
            navigate("/result");
        }
        else {
            setCurrQues(currQues + 1);
            setSelected();
            setIsSelected(false);
            setSubmitOrNext("submit");
            const audioDefaultPlay = new Audio(questions[currQues + 1].questionAudio);
            audioDefaultPlay.play();
        }
    };

    const handlePlay = () => {
        const audio = new Audio(questions[currQues].questionAudio);
        audio.play();
    };

    const handleSelect = (option, type) => {
        if(type !== 3) {
            const audio = new Audio(option.optionAudio);
            audio.play();
        }
        setSelected(option.isCorrect);
        setIsSelected(true);
    };

    return (
        <div>
            <Link to="/unit">Quit</Link>
            <h1>Question {currQues + 1} :</h1>
            <h2>{questions[currQues].questionText}</h2>

            { questions[currQues].questionType !== 4 ? (<Button onClick={handlePlay} disabled={submitOrNext==="next"}>Play</Button>) : (<></>)}
            { questions[currQues].questionType !== 4 ? (<audio autoPlay><source src={questions[currQues].questionAudio} type="audio/wav" /></audio>) : (<></>)}

            {questions[currQues].answerOptions &&
              questions[currQues].answerOptions.map((options) => (
                  <button
                    key={options.option}
                    onClick={() => handleSelect(options, questions[currQues].questionType)}
                    disabled={submitOrNext==="next"}
                  >
                      {questions[currQues].questionType !== 4 ? (options.option) : ("tst")}
                  </button>
              ))}

              <Button onClick={handleNext} disabled={!(isSelected)}>{submitOrNext}</Button>
        </div>
    );
};

export default Question;