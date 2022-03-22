import * as React from 'react';

interface StarDisplayProps {
    count: number;
}

const StarDisplay: React.FC<StarDisplayProps> = (props) => {
    return (
        <>
            {
                [...Array(props.count)].map((x, i) =>
                    <div key={i + 1} className="star" />
                )
            }
        </>);
}

export default StarDisplay;