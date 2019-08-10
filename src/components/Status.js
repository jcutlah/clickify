import React from "react";
import Styles from "../style";


const Status = props => (
        <div className="navbar row justify-content-center text-center mr-auto ml-auto" style={Styles.status[props.status]}>
            <span>{props.status === "winner" ? "Congratulations, you win." : "Terribly sorry, you lose." }</span>
        </div>
)

export default Status;