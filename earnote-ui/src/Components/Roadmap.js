import "./Roadmap.css";
import { useNavigate } from 'react-router-dom';

const Roadmap = ({fetchQuestions, setScore, setLessonKey, unit}) => {

    const navigate = useNavigate();

    const eventthis = (key) => {
        fetchQuestions(key, unit);
        setScore(0);
        setLessonKey(key);
        navigate("/lesson");
      }

    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 500">
                <defs>
                    <clipPath id="clip-Custom_Size_1">
                    <rect width="560" height="500"/>
                    </clipPath>
                </defs>
                <g id="Custom_Size_1" data-name="Custom Size – 1" className="cls-1">
                    <rect className="cls-6" width="560" height="500"/>
                    <path id="Path_1" strokeDasharray="3" data-name="Path 1" className="cls-2" d="M 270.263 41.726 C 269.742 126.161 447.472 58.926 475.095 142.839 S 343.232 184.014 268.179 178.281 S 43.734 149.596 66.049 256.878 S 168.181 292.066 234.267 292.066 S 294.345 342.703 300.353 383.041" transform="translate(11 17)"/>
                    
                    <g id="Unit" data-name="Unit" className="cls-3" transform="translate(270 25)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Unit {unit}</text>
                    </g>

                    <g id="C" onClick={() => eventthis('C')} data-name="C" className="cls-3" transform="translate(290 78)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>C</text>
                    </g>

                    <g id="G" onClick={() => eventthis('G')} data-name="G" className="cls-3" transform="translate(350 90)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>G</text>
                    </g>

                    <g id="D" onClick={() => eventthis('D')} data-name="D" className="cls-3" transform="translate(448 110)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>D</text>
                    </g>

                    <g id="A" onClick={() => eventthis('A')} data-name="A" className="cls-3" transform="translate(437 192)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>A</text>
                    </g>

                    <g id="E" onClick={() => eventthis('E')} data-name="E" className="cls-3" transform="translate(354 192)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>E</text>
                    </g>

                    <g id="B" onClick={() => eventthis('B')} data-name="B" className="cls-3" transform="translate(258 178)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>B</text>
                    </g>

                    <g id="Gb" onClick={() => eventthis('Gb')} data-name="Gb" className="cls-3" transform="translate(163 173)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Gb</text>
                    </g>

                    <g id="Db" onClick={() => eventthis('Db')} data-name="Db" className="cls-3" transform="translate(96 184)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Db</text>
                    </g>

                    <g id="Ab" onClick={() => eventthis('Ab')} data-name="Ab" className="cls-3" transform="translate(60 250)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Ab</text>
                    </g>

                    <g id="Eb" onClick={() => eventthis('Eb')} data-name="Eb" className="cls-3" transform="translate(94 307)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Eb</text>
                    </g>

                    <g id="Bb" onClick={() => eventthis('Bb')} data-name="Bb" className="cls-3" transform="translate(180 305)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Bb</text>
                    </g>

                    <g id="F" onClick={() => eventthis('F')} data-name="F" className="cls-3" transform="translate(277 305)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>F</text>
                    </g>

                    <g id="Checkpoint" data-name="Checkpoint" className="cls-3" transform="translate(300 388)">
                        <circle className="cls-4" cx="15.5" cy="15.5" r="15.5"/>
                        <circle className="cls-5" cx="15.5" cy="15.5" r="15"/>
                        <text>Checkpoint</text>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default Roadmap;