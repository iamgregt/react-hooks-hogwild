import React from "react";

function Hog({hogs}){

   
    function handleClick(hog){
        console.log(hog)
        console.log(hog["highest medal achieved"])
    

    }

    return(
        <div>
            {hogs.map((hog) =>{
                return <><li className="pigTile" key={hog.name}><h3>{hog.name}</h3>
                <img src={hog.image} alt={hog.name} onClick={() => handleClick(hog)}/>
                </li>
                {/* <div>
                    <h3>{hog.specialty}</h3>
                    <h3>{hog.weight}</h3>
                    <h3>{hog.greased ? "Greased" : "Not Greased"}</h3>
                    <h3>{hog["highest medal achieved"]}</h3>
                </div> */}
                </>
            })}
        </div>
    )
}

export default Hog