import "./Unit.css";
import { useNavigate } from 'react-router-dom';

const Unit = ({fetchQuestions, setScore, setLessonKey, lessonUnit, getUnitPercent}) => {

    const keys = ["C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb", "F"];

    const navigate = useNavigate();

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
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Unit;