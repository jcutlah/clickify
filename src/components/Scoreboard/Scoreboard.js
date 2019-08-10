import React from "react";

const Scoreboard = props => (
    <div className="scoreboard row justify-content-center text-center mr-auto ml-auto">
        <div className="col">
            <p>Don't click the same image twice!!</p>
            <div className="score">
                Score: {props.score}
            </div>
            <div className='score'>
                High Score: {props.total}
            </div>
        </div>
    </div>
)

export default Scoreboard;