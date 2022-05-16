import './SettingsPopUp.css';

const InfoPopUp = ({setCloseInfo, playAudio, questions}) => {

    const handleClick = () => {
        setCloseInfo(true);
        setTimeout(() => {playAudio(questions[3].questionAudio);}, 300);
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;</span>
                <p>I'm a pop up</p>
            </div>
        </div>
    );
};

export default InfoPopUp;