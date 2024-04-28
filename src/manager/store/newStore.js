// import { applyMiddleware, compose, createStore } from "redux";
// import { newReducer } from "../reduceres/newReducer";
// import thunk from "redux-thunk";

// const configureStore= () =>{
//     const store=createStore(newReducer,
//         compose(applyMiddleware(thunk)))
//     return store;
// }

// export default configureStore



import { applyMiddleware, compose, createStore } from "redux";
import { newsReducer } from "../reduceres/newReducer";
import thunk from "redux-thunk";

const configureStore = () => {
    const mystore = createStore(newsReducer,
        compose(applyMiddleware(thunk)));
    return mystore;
}

export default configureStore;