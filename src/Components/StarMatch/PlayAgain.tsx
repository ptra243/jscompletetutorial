type PlayAgainProps = {
    onClick: () => void;
    gameStatus: string

}

export const PlayAgain = (props: PlayAgainProps) => {
    return (
        <div className="game-done">
            <div className="message"
                style={{ color: props.gameStatus === 'won' ? 'green' : 'red' }}>
                {props.gameStatus === 'lost' ? 'Game Over!' : 'You Won!'}
            </div>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    );
};