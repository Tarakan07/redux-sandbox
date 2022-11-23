import { React } from "react";
import ReactDOM from "react-dom/client";
import Counter from "./counter";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
	root.render(
		<Counter counter={store.getState()} inc={inc} dec={dec} rnd={rnd} />
	);
};
const root = ReactDOM.createRoot(document.querySelector("#root"));
update();
store.subscribe(update);
