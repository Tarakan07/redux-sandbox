import { React } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);
const { dispatch } = store;

// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
