import React, {useState} from "react";

function Hog({hogs, onIsHog, isFiltered, isSorted}){
    
   
    function handleClick(hog){
        onIsHog(hog)
        console.log(hogs)

    }

    // if(isSorted === "ascending"){
    //     hogs = hogs.sort((a, b) => {
    //         return a.name.localeCompare(b.name)
    //     })
    // }
    // else if(isSorted === "descending"){
    //     hogs = hogs.sort((a, b) => {
    //         return b.name.localeCompare(a.name)
    //     })
    // }else{
    //     return hogs
    // }
    const hogsToShow = hogs.filter((hog) => {

        if(isFiltered){
            return hog.greased === true
        }else{
            return true
        }
    })

    return(
        <>  
            {hogsToShow.map((hog) =>{

                return <li className="pigTile" key={hog.name}><h3>{hog.name}</h3>
                <img src={hog.image} alt={hog.name} onClick={() => handleClick(hog)}/>
                </li>
            })}
        </>
    )
}

export default Hog