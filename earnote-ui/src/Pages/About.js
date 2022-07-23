import { Link } from 'react-router-dom';
import './About.css';

const About = ({langObj}) => {

    return (
        <div className='about'>
          <h1>{langObj.about}</h1>
          <h2>{langObj.About.what}</h2>
          <p>{langObj.About.what_content}</p>
          <h2>{langObj.About.how_do_i_learn}</h2>
          <p>{langObj.About.how_do_i_learn_content1}</p>
          <p>{langObj.About.how_do_i_learn_content2}</p>
          <h2>{langObj.About.how_is_progress}</h2>
          <p>{langObj.About.how_is_progress_content}</p>
          <h2>{langObj.About.why}</h2>
          <p>{langObj.About.why_content}</p>
          <h2>{langObj.About.who}</h2>
          <p>{langObj.About.who_content} <a href="https://www.linkedin.com/in/colbyharpersantaclara">LinkedIn</a>!</p>
          <h2>{langObj.About.interested}</h2>
          <p>{langObj.About.interested_content} <a href="https://github.com/charper11/EarTrainer">{langObj.About.here}</a>.</p>
          <Link className="return" to="/"><h3>{langObj.About.return}</h3></Link>
        </div>
    );
};

export default About;