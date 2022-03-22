import * as React from 'react';
import { useState, useEffect } from 'react';
import { utils } from './StarMatchUtils';

import './StarMatch.css';
import StarMatchNumber from './StarMatchNumber';
import StarDisplay from './StarDisplay';
import { PlayAgain } from './PlayAgain';
// Color Theme

interface StarMatchAppProps {

}

const StarMatchApp: React.FC<StarMatchAppProps> = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState<Array<number>>([]);

    const clickNumberHandler = (playNumber: number, currentStatus: string) => {
        if (currentStatus == 'used')
            return;
        const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(playNumber)
            : candidateNums.filter(cn => cn !== playNumber);
        if (utils.sum(newCandidateNums) !== stars) {
            setCandidateNums(newCandidateNums);
        }
        else {
            const newAvailableNums = availableNums.filter(
                n => !newCandidateNums.includes(n)
            );
            //redraw stars from what's available
            setStars(utils.randomSumIn(newAvailableNums, 9));
            setAvailableNums(newAvailableNums);
            setCandidateNums([]);
        }
        // console.log(playNumber);
    }
    const gameIsDone = availableNums.length === 0;
    const candidatesAreWrong = utils.sum(candidateNums) > stars;
    const numberStatus = (number: number) => {
        if (!availableNums.includes(number))
            return 'used';

        if (candidateNums.includes(number)) {
            return candidatesAreWrong ? 'wrong' : 'candidate'
        }
        return 'available';
    };

    const resetGame = () => {
        setStars(utils.random(1, 9));
        setAvailableNums(utils.range(1,9));
        setCandidateNums([]);
    }

    return (<div className="game">
        <div className="help">
            Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
            <div className="left">{gameIsDone ?
                <PlayAgain onClick={resetGame}/> :
                <StarDisplay count={stars} />}
            </div>
            <div className="right">
                {utils.range(1, 9).map((x, i) => <StarMatchNumber key={x} number={x} clickedEvent={clickNumberHandler} status={numberStatus(x)} />)}
            </div>
        </div>
        <div className="timer">Time Remaining: 10</div>
    </div>);
}

export default StarMatchApp;