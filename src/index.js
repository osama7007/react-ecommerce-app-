import React from 'react';
import "./index.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home , Cart ,Contact, OrderCycle,ProductDetails ,NotFound , Login , Register,Wishlist,Electronics,Fashion,Fragrances,Detergents ,Computers,Appliancies} from "./pages";
import Root from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import Games from './pages/games';
import Accessories from './pages/accessories';
import TV from './pages/TV';
import Watch from './pages/watch';
// intialize routing
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root/>,
    errorElement : <NotFound/>,
    children : [
      {
        index : true,
        element : <Home/>
      },
      {
        path : '/home',
        element : <Home/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : '/wishlist',
        element : <Wishlist/>
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/oderCycle',
        element : <OrderCycle/>
      },
      {
        path : '/productDetails',
        element : <ProductDetails/>
      },
      {
        path : '/login',
        element : <Login/>
      },
      {
        path : '/register',
        element : <Register/>
      },
      {
        path : '/product/:id',
        element : <ProductDetails/>
      },
      {
        path : '/products/:category=Electronics',
        element : <Electronics/>
      },
      {
        path : '/products/:category=Fashion',
        element : <Fashion/>
      },
      {
        path : '/products/:category=Fragrances',
        element : <Fragrances/>
      },
      {
        path : '/products/:category=Computers',
        element : <Computers/>
      },
      {
        path : '/products/:category=Detergents',
        element : <Detergents/>
      },
      {
        path : '/products/:category=Appliancies',
        element : <Appliancies/>
      },
      {
        path : '/products/:category=Games',
        element : <Games/>
      },
      {
        path : '/products/:category=Accessories',
        element : <Accessories/>
      },
      {
        path : '/products/:title=TV',
        element : <TV/>
      },
      {
        path : '/products/:title=Watch',
        element : <Watch/>
      },
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
