import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = ({setLessonUnit}) => {

  const navigate = useNavigate();

  const handleClick = (i) => {
    setLessonUnit(i);
    navigate("/unit");
  }

    return (
        <div className='home'>
          <button onClick={() => handleClick(1)}>Unit 1</button>
          <button onClick={() => handleClick(2)}>Unit 2</button>
          <button onClick={() => handleClick(3)}>Unit 3</button>
        </div>
    );
};

export default Home;