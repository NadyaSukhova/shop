import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import Cart from "./app/cart";
import { createStore } from "redux";
import { store } from "./store/index";

const router = createBrowserRouter([
  {
    path: "/shop",
    element: <App/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
  document.getElementById("root")
);
