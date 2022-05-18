import './StartPopUp.css';
import { Button } from '@mui/material';

const StartPopUp = ({setIsFirst, playAudio, questions, lessonKey, lessonUnit, secondNote, thirdNote}) => {

    const handleStart = () => {
        setIsFirst(false);
        if(questions[0].questionType !== 4) {
            setTimeout(() => {playAudio(questions[0].questionAudio);}, 300);
        }
    }

    const keyProps={"F": ["#FF7F50", "audio/piano-key-f.wav"],
                     "C": ["#FFDB58", "audio/piano-note-c.wav"],
                     "G": ["#AAFF00", "audio/piano-single-note-g.wav"],
                     "D": ["#50C878", "audio/piano-note-d.wav"],
                     "A": ["#00A36C", "audio/a-piano.wav"],
                     "E": ["#9FE2BF", "audio/piano-note-e.wav"],
                     "B": ["#96DED1", "audio/piano-note-b.wav"],
                     "Gb": ["#7DF9FF", "audio/piano-Gb.wav"],
                     "Db": ["#89CFF0", "audio/piano-Db.wav"],
                     "Ab": ["#4682B4", "audio/g-sharp-piano.wav"],
                     "Eb": ["#4169E1", "audio/piano-eb.wav"],
                     "Bb": ["#5D3FD3", "audio/piano-Bb.wav"]};

    return (
        <div className="modal">
            <div className="modal_content">
                <h2>Key of {lessonKey} lesson {lessonUnit}</h2>
                <p>The chord {lessonKey} major is made up of these 3 notes</p>
                <p>(click on each to hear an example with that note)</p>
                <svg height="100" width="100">
                    <g id="first-note" className="note-circle" onClick={() => playAudio(keyProps[lessonKey][1])}>
                      <circle cx="50" cy="50" r="40" fill={keyProps[lessonKey][0]} />
                      <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{lessonKey}</text>
                    </g>
                </svg>
                <svg height="100" width="100">
                    <g id="first-note" className="note-circle" onClick={() => playAudio(keyProps[secondNote][1])}>
                      <circle cx="50" cy="50" r="40" fill={keyProps[secondNote][0]} />
                      <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{secondNote}</text>
                    </g>
                </svg>
                <svg height="100" width="100">
                    <g id="first-note" className="note-circle" onClick={() => playAudio(keyProps[thirdNote][1])}>
                      <circle cx="50" cy="50" r="40" fill={keyProps[thirdNote][0]} />
                      <text x="50%" y="50%" text-anchor="middle" stroke="#36454F" stroke-width="2px" fill="#36454F" dy=".3em" fontSize="3.5em">{thirdNote}</text>
                    </g>
                </svg>
                <p>This lesson will train your ear to recognise these 3 notes</p>
                <Button variant="contained" color="primary" onClick={handleStart}>start</Button>
            </div>
        </div>
    );
};

export default StartPopUp;