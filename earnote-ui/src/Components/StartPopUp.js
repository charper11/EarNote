import './SettingsPopUp.css';

const StartPopUp = ({setIsFirst}) => {

    const handleClick = () => {
        setIsFirst(false);
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