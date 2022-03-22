import * as React from 'react';
import { useState } from 'react';
import { colors } from './StarMatchUtils'


interface StarMatchNumberProps {
    number: number,
    clickedEvent: (selectedNumber: number, status: string) => void,
    status: string
}


const StarMatchNumber: React.FC<StarMatchNumberProps> = (props) => {
    const [state, setState] = useState();


    return (<button className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.clickedEvent(props.number, props.status)}>
        {props.number}
    </button>);
};


export default StarMatchNumber;