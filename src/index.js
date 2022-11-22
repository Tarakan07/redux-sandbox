import { createStore } from "redux";

let reducer = (state = 0, action) => {
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		default:
			return state;
	}
	return 0;
};

const store = createStore(reducer);

document.querySelector("#dec").onclick = () => {
	store.dispatch({ type: "DEC" });
};
document.querySelector("#inc").onclick = () => {
	store.dispatch({ type: "INC" });
};

const update = () => {
	document.querySelector(".counter").innerHTML = store.getState();
};
store.subscribe(update);
