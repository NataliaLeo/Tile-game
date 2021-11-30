import React, { useState } from "react";
import Tile from "./components/Tile";
import pic1 from "./img/cyclops.svg";
import pic2 from "./img/fear-jack.svg";
import pic3 from "./img/mummy.svg";
import pic4 from "./img/ghost.svg";
import pic5 from "./img/angel.svg";
import pic6 from "./img/queen-devil.svg";
import pic7 from "./img/dracula.svg";
import pic8 from "./img/dead-head.svg";

function App() {
	const arr = [
		{ id: "1", img: pic1 },
		{ id: "2", img: pic2 },
		{ id: "3", img: pic3 },
		{ id: "4", img: pic4 },
		{ id: "5", img: pic5 },
		{ id: "6", img: pic6 },
		{ id: "7", img: pic7 },
		{ id: "8", img: pic8 },
	];

	const [pics, setPics] = useState([{ id: "1", img: pic1 }]);

	//const [count, setCount] = useState(0);

	// function Printer() {
	// 	console.log(Math.random);
	// }

	const [amount, setAmount] = useState(2);
	function AmountPlus() {
		setAmount(amount === 20 ? 20 : amount + 2);
		setPics(arr.slice(0, amount / 2 + 1));
		//console.log(Math.floor(Math.random() * 10));
	}
	function AmountMinus() {
		setAmount(amount === 2 ? 2 : amount - 2);
		setPics(arr.slice(0, amount / 2 + 1));
	}

	return (
		<div className="game-place">
			<div className="set-amount-block">
				<button
					disabled={amount === 2}
					onClick={AmountMinus}
					style={{ width: 100, height: 50 }}
				>
					-
				</button>
				<p>{amount}</p>
				<button
					disabled={amount === 20}
					onClick={AmountPlus}
					style={{ width: 100, height: 50 }}
				>
					+
				</button>
			</div>
			<div className="container">
				{pics.map((pic) => (
					<Tile background={pic.img} key={pic.id}></Tile>
				))}
				{pics.map((pic) => (
					<Tile background={pic.img} key={pic.id}></Tile>
				))}
			</div>
		</div>
	);
}

export default App;
