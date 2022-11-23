import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, dec, inc, rnd }) => {
	return (
		<div className="s">
			<h2 className="counter">{counter}</h2>
			<button onClick={dec} id="dec" className="btn btn-primary btn-lg">
				DEC
			</button>
			<button onClick={inc} id="inc" className="btn btn-primary btn-lg">
				INC
			</button>
			<button
				onClick={() => {
					const value = Math.floor(Math.random() * 10);
					rnd(value);
				}}
				id="rnd"
				className="btn btn-primary btn-lg"
			>
				INC rnd
			</button>
		</div>
	);
};
const mapStateToProps = (store) => {
	return {
		counter: store,
	};
};
export default connect(mapStateToProps)(Counter);
