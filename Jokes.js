import React from "react";

function Jokes(props) {
    

    return(
        <div className="joke">
            <p>feeling like <b>{props.feeling}</b></p>
            <p>my rating is <b>{props.rating}</b></p>

        </div>
    )
}
export default Jokes;