import React from "react";
import Hog from "./Hog";

function HogList({hogs}){
    return(
        <div className="ui grid container">
            <ul >
        <Hog hogs={hogs} />
            </ul>
        </div>
    )
}

export default HogList