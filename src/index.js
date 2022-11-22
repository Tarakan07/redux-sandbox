import { createStore} from "redux";

let reducer = (state = 0, action) => {
	switch (action.type) {
		case "INC":
			return state + 1;
		default:
			return state;
	}
	return 0;
};

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "INC" });

store.dispatch({ type: "INC" });
store.dispatch({ type: "INC" });
