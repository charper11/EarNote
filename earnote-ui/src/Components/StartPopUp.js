import './SettingsPopUp.css';
import { Button } from '@mui/material';

const StartPopUp = ({setIsFirst, playAudio, questions, lessonKey, lessonUnit, secondNote, thirdNote}) => {

    const handleClick = () => {
        setIsFirst(false);
        if(questions[0].questionType !== 4) {
            setTimeout(() => {playAudio(questions[0].questionAudio);}, 300);
        }
    }

    const keyColors={"F": "#FF7F50", "C": "#FFDB58", "G": "#AAFF00", "D": "#50C878", "A": "#00A36C", "E": "#9FE2BF", "B": "#96DED1", "Gb": "#7DF9FF", "Db": "#89CFF0", "Ab": "#4682B4", "Eb": "#4169E1", "Bb": "#5D3FD3"};

    return (
        <div className="modal">
            <div className="modal_content">
                <h2>Key of {lessonKey} lesson {lessonUnit}</h2>
                <p>The chord {lessonKey} major is made up of these 3 notes</p>
                <p>(click on each to hear an example with that note)</p>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" fill={keyColors[lessonKey]} />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{lessonKey}</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" fill={keyColors[secondNote]} />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{secondNote}</text>
                </svg>
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" fill={keyColors[thirdNote]} />
                    <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{thirdNote}</text>
                </svg>
                <p>This lesson will train your ear to recognise these 3 notes</p>
                <Button className="start" variant="contained" color="primary" onClick={handleClick}>start</Button>
            </div>
        </div>
    );
};

export default StartPopUp;