import Roadmap from '../Components/Roadmap.js';

const Home = ({fetchQuestions, setScore, setLessonKey, setLessonUnit}) => {

    return (
        <div>
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={1}
                      setLessonUnit={setLessonUnit}
          />
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={2}
                      setLessonUnit={setLessonUnit}
          />
        </div>
    );
};

export default Home;