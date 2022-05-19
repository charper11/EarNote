import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className='about'>
          <h1>About</h1>
          <h2>What is Ear Trainer?</h2>
          <h2>How do I learn with Ear Trainer?</h2>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default About;