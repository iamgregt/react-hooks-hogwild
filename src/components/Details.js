import React, {useState} from "react";

function Details({hog, isFiltered, onFilter, onSort}){
    
   function handleOnChange(e){
       onSort(e.target.value)
   }


    
    return(
        <div>
            <select onChange={handleOnChange}>
                <option value="ascending">Sort Ascending</option>
                <option value="descending">Sort Descending</option>
            </select>
            <button onClick={onFilter} >{isFiltered ? "Show All" : "Show Greased"}</button>
            <h3>{hog.specialty}</h3>
            <h3>{hog.weight}</h3>
            <h3>{hog.greased ? "Greased" : "Not Greased"}</h3>
            <h3>{hog["highest medal achieved"]}</h3>
        </div>
    )
}

export default Details