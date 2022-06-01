import { useNavigate } from 'react-router-dom';
import "./Home.css";

const Home = ({setLessonUnit, getUnitPercent}) => {

  const navigate = useNavigate();

  const handleClick = (i) => {
    setLessonUnit(i);
    navigate("/unit");
  }

    return (
        <div className='home'>
          <div className='button-row'>
            <div className='button'><button className="glow" onClick={() => handleClick(1)}>Unit 1 {getUnitPercent(1)}</button></div>
            <div className='button'><button className="glow" onClick={() => handleClick(2)}>Unit 2 {getUnitPercent(2)}</button></div>
            <div className='button'><button className="glow" onClick={() => handleClick(3)}>Unit 3 {getUnitPercent(3)}</button></div>
          </div>
        </div>
    );
};

export default Home;