import * as React from 'react';
import { useState, useEffect } from 'react';
import { utils } from './StarMatchUtils';

import './StarMatch.css';
import StarMatchNumber from './StarMatchNumber';
import StarDisplay from './StarDisplay';
import { PlayAgain } from './PlayAgain';


// Color Theme

interface StarMatchGameProps {
    startNewGame: () => void;
}
//Custom Hook
const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState<Array<number>>([]);
    const [secondsLeft, setSecondsLeft] = useState(20);

    useEffect(() => {
        if (secondsLeft > 0 && availableNums.length > 0) {
            const id = setTimeout(() => {
                setSecondsLeft(secondsLeft - 1);
            }, 1000);
            return () => { clearTimeout(id) }
        }
    }, [secondsLeft, availableNums]);

    const setGameState = (newCandidateNums: Array<number>) => {
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
    }
    return { stars, availableNums, candidateNums, secondsLeft, setGameState }
}


const StarMatchGame: React.FC<StarMatchGameProps> = (props) => {
    const { stars, availableNums, candidateNums, secondsLeft, setGameState } = useGameState();

    const clickNumberHandler = (playNumber: number, currentStatus: string) => {
        if (currentStatus === 'used' || gameStatus !== 'active')
            return;
        const newCandidateNums = currentStatus === 'available' ? candidateNums.concat(playNumber)
            : candidateNums.filter(cn => cn !== playNumber);
        setGameState(newCandidateNums);
        // console.log(playNumber);
    }

    const gameStatus = availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';
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
        props.startNewGame();
    }

    return (<div className="game">
        <div className="help">
            Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
            <div className="left">{
                gameStatus !== 'active' ?
                    <PlayAgain onClick={resetGame} gameStatus={gameStatus} /> :
                    <StarDisplay count={stars} />}
            </div>
            <div className="right">
                {utils.range(1, 9).map((x, i) => <StarMatchNumber key={x} number={x} clickedEvent={clickNumberHandler} status={numberStatus(x)} />)}
            </div>
        </div>
        <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>);
}

export default StarMatchGame;