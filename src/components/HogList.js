import React from "react";
import Hog from "./Hog";

function HogList({hogs, onIsHog, isFiltered, isSorted}){
    

    if(isSorted === "ascending"){
        hogs.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
    }else if(isSorted === "descending"){
        hogs.sort((a, b) => {
           return b.name.localeCompare(a.name)
        })
    }
 
    return(
        <div className="ui grid container">
            <ul >
        <Hog hogs={hogs} onIsHog={onIsHog} isFiltered={isFiltered} isSorted={isSorted} />
            </ul>
        </div>
    )
}

export default HogList