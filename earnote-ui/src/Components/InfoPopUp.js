import './SettingsPopUp.css';
import { Button } from '@mui/material';

const InfoPopUp = ({setCloseInfo, playAudio, questions, langObj}) => {

    const handleClick = () => {
        setCloseInfo(true);
        setTimeout(() => {playAudio(questions[3].questionAudio);}, 300);
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <p>{langObj.Lesson.info}</p>
                <Button variant="contained" color="primary" onClick={handleClick}>{langObj.Lesson.start}</Button>
            </div>
        </div>
    );
};

export default InfoPopUp;