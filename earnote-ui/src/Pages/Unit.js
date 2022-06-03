import "./Unit.css";
import { useNavigate } from 'react-router-dom';
import Home from './Home.js';

const Unit = ({fetchQuestions, setScore, setLessonKey, lessonUnit, setLessonUnit, getUnitPercent}) => {

    const navigate = useNavigate();

    // handle refresh error
    if(lessonUnit === undefined) {
        return <Home setLessonUnit={setLessonUnit} getUnitPercent={getUnitPercent}></Home>
    }

    const keys = ["C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb", "F"];

    const eventthis = (key) => {
        fetchQuestions(key, lessonUnit);
        setScore(0);
        setLessonKey(key);
        navigate("/lesson");
    }

    return (
        <div className="unit">
            <div className="bg-gradient_solid">
            <div className="container">
                <div className="section-header">
                    <h2>Unit {lessonUnit} {getUnitPercent(lessonUnit)}</h2>
                    <hr/>
                </div>
                <div className="steps">
                    {keys.map((k) => (
                        <div className="steps-container" key={k}>
                            <div className="date" key={k} onClick={() => eventthis(k)}>
                                {k}
                            </div>
                            {localStorage.getItem(k+lessonUnit.toString()) ? "✔️" : ""}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Unit;