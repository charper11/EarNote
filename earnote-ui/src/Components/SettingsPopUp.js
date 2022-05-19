import './SettingsPopUp.css';

const SettingsPopUp = ({toggleSettings}) => {

    const handleClose = () => {
        toggleSettings();
    }

    const setLanguage = (lang) => {
        lang ? localStorage.setItem('isSpanish', lang) : localStorage.removeItem('isSpanish');
        toggleSettings();
    }

    const setColorMode = () => {
        localStorage.getItem('isColorBlindSet') ? localStorage.removeItem('isColorBlindSet') : localStorage.setItem('isColorBlindSet', true);
    }

    const removeCriteria = () => {
        if(localStorage.getItem('passCriteria')) {
            localStorage.removeItem('passCriteria');
        }
    }

    const setCriteria = () => {
        localStorage.setItem('passCriteria', 5);
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClose}>&times;</span>
                <div className='center'>
                    <h2>Settings</h2>
                    <div className='content-list'>
                    <span className='content-title'>Color Blind Mode</span>
                    <label className="switch">
                        <input type="checkbox" onClick={setColorMode} defaultChecked={localStorage.getItem('isColorBlindSet')==='true'} />
                        <span className="slider round"></span>
                    </label>
                    </div>
                    <div className='content-list'>
                        <span className='content-title'>Language</span>
                        <button className={localStorage.getItem('isSpanish') ? 'settings-button' : 'settings-button selected'} onClick={() => setLanguage(false)}>English</button>
                        <button className={localStorage.getItem('isSpanish') ? 'settings-button selected' : 'settings-button'} onClick={() => setLanguage(true)}>Español</button>
                    </div>
                    <div className='content-list'>
                        <span className='content-title'>Pass Criteria</span>
                        <button onClick={removeCriteria}>None</button>
                        <button onClick={setCriteria}>50%</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPopUp;