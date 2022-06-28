import "./Unit.css";
import { useNavigate } from 'react-router-dom';
import Home from './Home.js';

const Unit = ({fetchQuestions, setScore, setLessonKey, lessonUnit, setLessonUnit, getUnitPercent}) => {

    const navigate = useNavigate();

    // handle refresh error
    if(lessonUnit === undefined) {
        return <Home setLessonUnit={setLessonUnit} getUnitPercent={getUnitPercent}></Home>
    }

    const keys = [["C", "#FFDB58"],
                  ["G", "#AAFF00"],
                  ["D", "#50C878"],
                  ["A", "#00A36C"],
                  ["E", "#9FE2BF"],
                  ["B", "#96DED1"],
                  ["Gb", "#7DF9FF"],
                  ["Db", "#89CFF0"],
                  ["Ab", "#4682B4"],
                  ["Eb", "#4169E1"],
                  ["Bb", "#5D3FD3"],
                  ["F", "#FF7F50"]];

    const eventthis = (key) => {
        fetchQuestions(key, lessonUnit);
        setScore(0);
        setLessonKey(key);
        navigate("/lesson");
    }

    return (
        <div className="unit">
            <div className="container">
                <div className="section-header">
                    <h2>Unit {lessonUnit} {getUnitPercent(lessonUnit)}</h2>
                    <hr/>
                </div>
                <div className="steps">
                    {keys.map((k) => (
                        <div className="steps-container" key={k[0]}>
                            <div className="date" key={k[0]} style={{backgroundColor: k[1]}} onClick={() => eventthis(k[0])}>
                                {k[0]}
                            </div>
                            {localStorage.getItem(k[0]+lessonUnit.toString()) ? "✔️" : ""}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Unit;