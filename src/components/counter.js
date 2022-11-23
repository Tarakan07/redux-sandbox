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
// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators(actions, dispatch);
// }; данный паттерн функция конект может делать, достаточно передать actions

export default connect(mapStateToProps, actions)(Counter);
// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
