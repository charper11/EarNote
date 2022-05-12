import './SettingsPopUp.css';

const SettingsPopUp = ({toggleSettings}) => {

    const handleClick = () => {
        toggleSettings();
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

export default SettingsPopUp;