import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import Details from "./Details";

import hogs from "../porkers_data";

function App() {

	const [isHog, setIsHog] = useState("")
	const [isFiltered, setIsFiltered] = useState(false)
	const [isSorted, setIsSorted] = useState("All")

	function handleIsSorted(order){
		setIsSorted(isSorted => isSorted = order)
	}

	function handleIsFiltered(){
        setIsFiltered(isFiltered => !isFiltered)
    }

	return (
		<div className="App">
			<Nav />
			<Details hog={isHog} onFilter={handleIsFiltered} isFiltered={isFiltered} onSort={handleIsSorted} />
			<HogList hogs={hogs} onIsHog={setIsHog} isFiltered={isFiltered} isSorted={isSorted} />
		</div>
	);
}

export default App;
