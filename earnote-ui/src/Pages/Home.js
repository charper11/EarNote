import Roadmap from '../Components/Roadmap.js';

const Home = ({fetchQuestions, setScore, setLessonKey}) => {

    return (
        <div>
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={1}
          />
          <Roadmap
                      fetchQuestions={fetchQuestions}
                      setScore={setScore}
                      setLessonKey={setLessonKey}
                      unit={2}
          />
        </div>
    );
};

export default Home;