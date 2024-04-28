// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import configureStore from './manager/store/newStore';
// import { addProduct, getproductsFromDatabase, removeProduct } from './manager/actions/newAction';
// // import { addProduct, removeProduct } from './manager/actions/newAction';

// const store=configureStore()
// // store.subscribe(()=>{
// //   console.log(store.getState())
// // })

// // const product1=store.dispatch(addProduct({id:0,img:"https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/hom-2-port-f-2.jpg",title: "Ceramics",desc: 'Agency'}))
// // store.dispatch(addProduct({id:1,img:"https://sarto.qodeinteractive.com/wp-content/uploads/2018/03/hom-2-port-f-2.jpg",title: "Ceramics",desc: 'Agency'}))
// // store.dispatch(addProduct({id:2, img: "https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/hom-2-port-f-4.jpg", title:"Architecture Art",desc:"Agency"}));
// // store.dispatch(addProduct({id:3,img:"https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/hom-2-port-f-3.jpg",title: "Our Vision",desc: 'Agency'}))
// // store.dispatch(addProduct({id:4,img:"https://sarto.qodeinteractive.com/wp-content/uploads/2018/04/hom-2-port-f-5.jpg",title: "Personal Card.",desc: 'Agency'}))

// // store.dispatch(removeProduct({id:product1.product.id}))

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <Provider store={store}>
// //     <App />
// //     </Provider>
// //   </React.StrictMode>
// // );

// const result = (
//   <Provider store={store}>
//       <App />
//   </Provider>
// )

// ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

// store.dispatch(getproductsFromDatabase()).then(() => {
//     ReactDOM.render(result, document.getElementById('root'));
// })

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "../src/manager/store/newStore";
import { getnewssFromDatabase } from "../src/manager/actions/newAction";
import { ModeProvider } from "./context/ModeContext";
const store = configureStore();

const result = (
  <Provider store={store}>
    <ModeProvider>
      <App />
    </ModeProvider>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(getnewssFromDatabase()).then(() => {
  ReactDOM.render(result, document.getElementById("root"));
});
