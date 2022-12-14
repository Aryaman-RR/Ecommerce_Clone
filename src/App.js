import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51LXdccSIfEzmJAPjLGRG5Lq8vFGoZ8S0uOHEkB2zgqFh6pK5iApGb83DCKQoBsemKBrV8OENzJ1nSM5eevEYctZ600cHT2i2J2"
);

function App() {

  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run i=once  when app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS -> ', authUser);

      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        // the user is logged out
        dispatch({

          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">

        <Routes>
          <Route path="/login" element={[<Login />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[
            <Header />,
            < Elements stripe={promise}>
              <Payment />
            </Elements>,
          ]} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>

      </div>
    </Router>

  );
}

export default App;
