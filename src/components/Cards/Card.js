import React from "react";
import styles from "./style";

const Card = props => (
    <div className="card-wrapper col-6 col-md-4 col-lg-3" style={styles.imageWrapper}>
        <img id={props.id} src={props.src} alt={props.alt} style={styles.image} onClick={() => props.handleClick(props.id)} />
    </div> 
)

export default Card;