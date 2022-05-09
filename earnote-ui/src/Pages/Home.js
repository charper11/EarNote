import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = ({unit, setUnit}) => {

  const navigate = useNavigate();

  const handleClick = (i) => {
    setUnit(i);
    navigate("/unit");
  }

    return (
        <div>
          <Button onClick={() => handleClick(1)}>Unit 1 (beginner)</Button>
          <Button onClick={() => handleClick(2)}>Unit 2 (intermediate)</Button>
          <Button>Unit 3 (expert)</Button>
        </div>
    );
};

export default Home;