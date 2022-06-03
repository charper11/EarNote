import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className='about'>
          <h1>About</h1>
          <h2>What is Ear Trainer?</h2>
          <p>The Ear Trainer program is a fun and easy way to start learning how to recognize notes just by hearing them.</p>
          <h2>How do I learn with Ear Trainer?</h2>
          <p>The ear trainer program takes you on a path around the Circle of Fifths, learning notes in one chord at a time.</p>
          <p>There are three units each with 12 lessons (one for each key). Each unit builds on the last and increases in difficulty as you increase in skill.</p>
          <h2>How is progress tracked?</h2>
          <p>Once a lesson is completed, your progress will be updated. How to determine what constitutes a completed lesson can be applied in the settings. By default, completing all 10 questions regardless of score will award a completed lesson.</p>
          <h2>Why use Ear Trainer?</h2>
          <p>A strong inner ear is essential for understanding music composition. Great musicians have advanced listening skills that improve the quality of their performances, as well as the music creation process.</p>
          <h2>Who made Ear Trainer?</h2>
          <p>Hey, I'm Colby.</p>
          <h2>Interested in the code?</h2>
          <p>Check it out on github.</p>
          <Link className="return" to="/"><h3>Return to Home Page</h3></Link>
        </div>
    );
};

export default About;