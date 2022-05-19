import { Link } from 'react-router-dom';
import './Guide.css';
import CircleOfFifths from '../Components/CircleOfFifths';

const Guide = () => {

    return (
        <div className="guide">
          <h1>Guide</h1>
          <h2>The Circle of Fifths</h2>
          <CircleOfFifths />
          <p>Starting with C and moving clockwise note to note (C to G to D to A, etc), you'll notice that after 12 notes we return back to our starting point. This cyclical nature is called the circle of fifths and is one of the most fundamental principles in all of music theory.</p>
          <p>If you pick one of the 12 notes in the circle, it along with the note to the left and the right make up what is called the three primary chords of that key.</p>
          <p>Ear trainer progresses through this circle, with each lesson covering one set of primary chords at a time.</p>
          <h2>Scale</h2>
          <p>A scale is a set of notes arranged in series, from one note to the same note an octave higher. Think, "Do, re, mi, fa, so, la, ti, do."</p>
          <p>Some questions in Ear Trainer will ask you to identify the same note but in a higher or lower octave.</p>
          <Link to="/">Return to Home Page</Link>
        </div>
    );
};

export default Guide;