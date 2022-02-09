import React from "react";
import Hog from "./Hog";

function HogList({hogs, onIsHog, isFiltered, isSorted}){
    return(
        <div className="ui grid container">
            <ul >
        <Hog hogs={hogs} onIsHog={onIsHog} isFiltered={isFiltered} isSorted={isSorted} />
            </ul>
        </div>
    )
}

export default HogList