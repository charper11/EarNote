import './CircleOfFifths.css';

const CircleOfFifths = () => {

    return (
        <div className='wheel'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-50 -50 100 100">
                <defs>
                  <circle id="c" className="breaks" r="40"/>
                </defs>
                <use xlinkHref='#c' className='red'/>
                <use xlinkHref="#c" className='gold'/>
                <use xlinkHref="#c" className='blue'/> 
                <use xlinkHref="#c" className='yellow'/>
                <use xlinkHref="#c" className='green'/>
                <use xlinkHref="#c" className='black'/>
                <use xlinkHref="#c" className='gray'/>
                <use xlinkHref="#c" className='purple'/>
                <use xlinkHref="#c" className='brown'/>
                <use xlinkHref="#c" className='magenta'/>
                <use xlinkHref="#c" className='teal'/>
                <use xlinkHref="#c" className='orange'/>

                <text className='text' x="40">red</text>
            </svg>
        </div>
    );
};

export default CircleOfFifths;