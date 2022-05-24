import './SettingsPopUp.css';
import { Button } from '@mui/material';

const InfoPopUp = ({setCloseInfo, playAudio, questions}) => {

    const handleClick = () => {
        setCloseInfo(true);
        setTimeout(() => {playAudio(questions[3].questionAudio);}, 300);
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <p>Let's make it a bit harder. Now it will ask you to match 2 sounds with the same note but different scale.</p>
                <Button variant="contained" color="primary" onClick={handleClick}>Start</Button>
            </div>
        </div>
    );
};

export default InfoPopUp;