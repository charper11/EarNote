import { Link } from 'react-router-dom';
import './About.css';

const About = () => {

    return (
        <div className='about'>
          <h1>About</h1>
          <h2>What is Ear Trainer?</h2>
          <p>The Ear Trainer program is a fun and easy to start way to recognize notes just by hearing them.</p>
          <h2>How do I learn with Ear Trainer?</h2>
          <p>The ear trainer program takes you on a path around the Circle of Fifths, learning notes in one primary chord at a time.</p>
          <p>It begins with the key of C, with the primary notes being C, G, and F. This is the predominant starting point in music schools as the notes are the most distinct from one another.</p>
          <p>Each lesson progresses clockwise through the Circle of Fifths, naturally getting more challenging as the notes in the primary chords become more closely related.</p>
          <p>Once a lesson is completed, your progress will be updated. How to determine what constitutes a completed lesson can be applied in the settings. By default, completing all 10 questions regardless of score will award a completed lesson.</p>
          <h2>Why use Ear Trainer?</h2>
          <p>A strong inner ear is essential for understanding music composition. Great musicians have advanced listening skills that improve the quality of their performances, as well as the music creation process.</p>
          <p>Honing your aural skills through ear training is important because it improves your relative pitch, which is the ability to replicate a note's sound or identify it based on where it is in relation to another note. This is a skill that helps you analyze and decipher what you're hearing, allowing you to better understand the relationship between musical elements. When you practice ear training, you can improve your rhythm, tune your instruments more accurately, play better with other musicians, and strengthen your improvisation and sight-singing skills.</p>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default About;