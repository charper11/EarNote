import './SettingsPopUp.css';

const StartPopUp = ({setIsFirst, playAudio, questions}) => {

    const handleClick = () => {
        setIsFirst(false);
        setTimeout(() => {playAudio(questions[0].questionAudio);}, 300);
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

export default StartPopUp;