import './SettingsPopUp.css';
import { useState } from 'react';
import { Button } from '@mui/material';

const SettingsPopUp = ({toggleSettings, langObj, setLangObj}) => {

    const [selected, setSelected] = useState();

    const handleClose = () => {
        toggleSettings();
    }

    const setLanguage = (lang) => {
        localStorage.setItem('lang', lang);
        setLangObj(require('../Language/' + localStorage.getItem('lang') + ".json"));
        setSelected(lang);
    }

    const setColorMode = () => {
        localStorage.getItem('isColorBlindSet') ? localStorage.removeItem('isColorBlindSet') : localStorage.setItem('isColorBlindSet', true);
    }

    const removeCriteria = () => {
        if(localStorage.getItem('passCriteria')) {
            localStorage.removeItem('passCriteria');
        }
        setSelected("none");
    }

    const setCriteria = () => {
        localStorage.setItem('passCriteria', 5);
        setSelected("50");
    }

    const handleOptionCSS = (i) => {
        if(!localStorage.getItem('passCriteria') && i === "none") return "selected";
        if(localStorage.getItem('passCriteria') === '5' && i === "50") return "selected";
    }

    return (
        <div className="modal">
            <div className="modal_content">
                    <div className='content-list'><h2>{langObj.SettingsPopUp.settings}</h2></div>
                    <div className='content-list'>
                    <span className='content-title'>{langObj.SettingsPopUp.color_blind_mode}</span>
                    <label className="switch">
                        <input type="checkbox" onClick={setColorMode} defaultChecked={localStorage.getItem('isColorBlindSet')==='true'} />
                        <span className="slider round"></span>
                    </label>
                    </div>
                    <div className='content-list'>
                        <span className='content-title'>{langObj.SettingsPopUp.language}</span>
                        <button className={localStorage.getItem('lang') === 'es' ? 'settings-button' : 'settings-button selected'} onClick={() => setLanguage('en')}>English</button>
                        <button className={localStorage.getItem('lang') === 'es' ? 'settings-button selected' : 'settings-button'} onClick={() => setLanguage('es')}>Español</button>
                    </div>
                    <div className='content-list'>
                        <span className='content-title'>{langObj.SettingsPopUp.pass_criteria}</span>
                        <button
                            className={`settings-button ${handleOptionCSS('none')}`}
                            onClick={removeCriteria}>
                            {langObj.SettingsPopUp.none}
                        </button>
                        <button
                            className={`settings-button ${handleOptionCSS('50')}`}
                            onClick={setCriteria}>
                            50%
                        </button>
                    </div>
                    <div className='content-list'>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClose}>
                            {langObj.SettingsPopUp.done}
                        </Button>
                    </div>
            </div>
        </div>
    );
};

export default SettingsPopUp;