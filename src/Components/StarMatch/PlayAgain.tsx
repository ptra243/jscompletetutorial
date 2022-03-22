import { PropaneSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

type PlayAgainProps = {
    onClick: ()=>void;

}

export const PlayAgain = (props: PlayAgainProps) => {
    const [state, setState] = useState();

    //   useEffect(() => {}, []);

    return (
        <div className="game-done">
            <button onClick={props.onClick}>Play Again</button>
        </div>
    );
};