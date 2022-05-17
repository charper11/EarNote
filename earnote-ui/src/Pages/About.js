import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className='about'>
          <h2>About</h2>
          <p>My name is Colby.</p>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default About;