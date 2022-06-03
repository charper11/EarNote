import { Link } from 'react-router-dom';
import './Guide.css';
import CircleOfFifths from '../Components/CircleOfFifths';

const Guide = () => {

    return (
        <div className="guide">
          <h1>Guide</h1>
          <h2>The Circle of Fifths</h2>
          <div className="float-container">
          <div className="float-child"><CircleOfFifths /></div>
          <div className='float-child'>
          <p className='circle-p'>Starting with C and moving clockwise note to note (C to G to D to A, etc), you'll notice that after 12 notes we return back to our starting point. This cyclical nature is called the circle of fifths and is one of the most fundamental principles in all of music theory.</p>
          <p className='circle-p'>If you pick one of the 12 notes in the circle, it along with the note to the right, and the note 4 to the right, are the notes that create the chord of that key.</p>
          <p className='circle-p'>Ear trainer progresses through this circle, with each lesson covering one chord at a time.</p>
          </div>
          </div>
          <h2>Scale</h2>
          <p>A scale is a set of notes arranged in series, from one note to the same note an octave higher. Think, "Do, re, mi, fa, so, la, ti, do."</p>
          <p>Some questions in Ear Trainer will ask you to identify the same note but in a higher or lower octave.</p>
          <Link className='return' to="/"><h3>Return to Home Page</h3></Link>
        </div>
    );
};

export default Guide;