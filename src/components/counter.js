import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { bindActionCreators } from "redux";

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className="s">
			<h2 className="counter">{counter}</h2>
			<button onClick={dec} id="dec" className="btn btn-primary btn-lg">
				DEC
			</button>
			<button onClick={inc} id="inc" className="btn btn-primary btn-lg">
				INC
			</button>
			<button onClick={rnd} id="rnd" className="btn btn-primary btn-lg">
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
const mapDispatchToProps = (dispatch) => {
	const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
	return {
		inc,
		dec,
		rnd: () => {
			const randomValue = Math.floor(Math.random() * 10);
			rnd(randomValue);
		},
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch);
// };
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
