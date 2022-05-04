import { Button } from '@mui/material';

const Lesson = () => {

    const handlePlay = () => {
        var audio = new Audio('audio/nylon-guitar-shot-a-note.wav');
        audio.play();
    };

    return (
        <div>
            <span>Lesson Page</span>
            <Button onClick={handlePlay}>Test</Button>
        </div>
    );
};

export default Lesson;