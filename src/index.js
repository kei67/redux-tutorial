import React from "react";
import ReactDOM from "react-dom/client";
import store from "../../app/store";
import { Provider } from "react-redux";
import App from "./src/app"


const root = ReactDOM.createRoot(
    document.getElementById("root")
)

// TODO 2. Provider でstoreを括る。
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)