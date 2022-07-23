import { Link } from 'react-router-dom';
import './Guide.css';
import CircleOfFifths from '../Components/CircleOfFifths';

const Guide = ({langObj}) => {

    return (
        <div className="guide">
          <h1>{langObj.guide}</h1>
          <h2>{langObj.Guide.circle_of_fifths}</h2>
          <div className="float-container">
          <div className="float-child"><CircleOfFifths /></div>
          <div className='float-child'>
          <p className='circle-p'>{langObj.Guide.circle_of_fifths_content1}</p>
          <p className='circle-p'>{langObj.Guide.circle_of_fifths_content2}</p>
          <p className='circle-p'>{langObj.Guide.circle_of_fifths_content3}</p>
          </div>
          </div>
          <h2>{langObj.Guide.scale}</h2>
          <p>{langObj.Guide.scale_content1}</p>
          <p>{langObj.Guide.scale_content2}</p>
          <Link className='return' to="/"><h3>{langObj.return}</h3></Link>
        </div>
    );
};

export default Guide;