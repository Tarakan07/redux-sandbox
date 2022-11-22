let reducer = (state = 0, action) => {
	if (state == undefined) {
		return 0;
	}
	switch (action.type) {
		case "INC":
			return state + 1;
		default:
			return state;
	}
	return 0;
};

let state = reducer(undefined, {});
console.log(state);
state = reducer(state, { type: "INC" });
state = reducer(state, { type: "INC" });
state = reducer(state, { type: "INC" });
console.log(state);
