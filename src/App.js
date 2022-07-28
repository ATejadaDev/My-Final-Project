import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51LQDGXIZWq3iaeytOMLeBql7vzfuYHD2eKxSKS176JtCc5sgJQINJTgb9J1e4PsFmja1apJvsW7SyEhljIo5UHPo00SE0BmhWn');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Esto solo se usará la primera vez que el usuario haga login

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // Si el usuario está logueado, lo autentifica usando el authUser

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // Si no está autenticado, el usuario se vuelve null
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
             <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
             <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
