import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className='about'>
          <h2>About</h2>
          <h3>What is Ear Trainer?</h3>
          <h3>How do I learn with Ear Trainer?</h3>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default About;