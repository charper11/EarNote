import './SettingsPopUp.css';

const SettingsPopUp = ({toggleSettings}) => {

    const handleClose = () => {
        toggleSettings();
    }

    const setLanguage = (lang) => {
        lang ? localStorage.setItem('isSpanish', lang) : localStorage.removeItem('isSpanish');
    }

    const setColorMode = () => {
        localStorage.getItem('isColorBlindSet') ? localStorage.removeItem('isColorBlindSet') : localStorage.setItem('isColorBlindSet', true);
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClose}>&times;</span>
                <h2>Settings</h2>
                <div>
                  <span>Color Blind Mode</span>
                  <label className="switch">
                    <input type="checkbox" onClick={setColorMode} />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div>
                    <span>Language</span>
                    <button onClick={() => setLanguage(false)}>English</button>
                    <button onClick={() => setLanguage(true)}>Español</button>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopUp;