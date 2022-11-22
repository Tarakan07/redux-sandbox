import { createStore } from "redux";
import reducer from "./reducer";
import { dec, inc, rnd } from "./actions";
const store = createStore(reducer);

document.querySelector("#dec").onclick = () => {
	store.dispatch(dec());
};
document.querySelector("#inc").onclick = () => {
	store.dispatch(inc());
};
document.querySelector("#rnd").onclick = () => {
	const payload = Math.floor(Math.random() * 10);
	store.dispatch(rnd(payload));
};

const update = () => {
	document.querySelector(".counter").innerHTML = store.getState();
};
store.subscribe(update);
