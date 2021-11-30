import React, { FC, useState } from "react";

interface TileProps {
	background: string;
}

const Tile: FC<TileProps> = ({ background, children }) => {
	const [side, setSide] = useState("tile tile-closed");
	function turnOver() {
		setSide(
			side === "tile tile-closed" ? "tile tile-opened" : "tile tile-closed"
		);
	}

	return (
		<div className={side} onClick={turnOver}>
			<img src={background} alt="" />
			{children}
		</div>
	);
};

export default Tile;
