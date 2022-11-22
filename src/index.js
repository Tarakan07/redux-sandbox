import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";
const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.querySelector("#dec").onclick = () => {
	dec();
};
document.querySelector("#inc").onclick = () => {
	inc();
};
document.querySelector("#rnd").onclick = () => {
	const payload = Math.floor(Math.random() * 10);
	rnd(payload);
};

const update = () => {
	document.querySelector(".counter").innerHTML = store.getState();
};
store.subscribe(update);
