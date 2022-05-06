import { Button } from '@mui/material';

const Unit = () => {

    const keys = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "F#", "G"];

    return (
        <div>
          <span>Unit Page</span>
          {keys.map((key) => (
              <Button key={key} href="/lesson">{key}</Button>
            ))}
        </div>
    );
};

export default Unit;