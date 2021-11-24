import React, { useState } from "react";
import Tile from "./components/Tile";
import pic1 from "./img/cyclops.svg";
import pic2 from "./img/fear-jack.svg";
import pic3 from "./img/mummy.svg";

function App() {
	const pics = [
		{ id: "1", img: pic1 },
		{ id: "2", img: pic2 },
		{ id: "3", img: pic3 },
	];
	//

	return (
		<div className="container">
			{pics.map((pic) => (
				<Tile
					height="200px"
					width="120px"
					background={pic.img}
					key={pic.id}
				></Tile>
			))}
			{pics.map((pic) => (
				<Tile
					height="200px"
					width="120px"
					background={pic.img}
					key={pic.id}
				></Tile>
			))}
		</div>
	);
}

export default App;
