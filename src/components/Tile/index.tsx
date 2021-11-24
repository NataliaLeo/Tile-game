import React, { FC, useState } from "react";

interface TileProps {
	width: string;
	height: string;
	background: string;
}

const Tile: FC<TileProps> = ({ width, height, background, children }) => {
	const [side, setSide] = useState("tile tile-closed");
	function turnOver() {
		setSide(
			side === "tile tile-closed" ? "tile tile-opened" : "tile tile-closed"
		);
	}

	return (
		<div className={side} style={{ width, height }} onClick={turnOver}>
			<img src={background} alt="" />
			{children}
		</div>
	);
};

export default Tile;
