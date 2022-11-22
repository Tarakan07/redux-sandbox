import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import { dec, inc, rnd } from "./actions";
const store = createStore(reducer);
const { dispatch } = store;
const bindActionCreator =
	(creator, dispatch) =>
	(...args) => {
		dispatch(creator(...args));
	};

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = bindActionCreator(dec, dispatch);
const rndDispatch = bindActionCreator(rnd, dispatch);

document.querySelector("#dec").onclick = () => {
	decDispatch();
};
document.querySelector("#inc").onclick = () => {
	incDispatch();
};
document.querySelector("#rnd").onclick = () => {
	const payload = Math.floor(Math.random() * 10);
	rndDispatch(payload);
};

const update = () => {
	document.querySelector(".counter").innerHTML = store.getState();
};
store.subscribe(update);
