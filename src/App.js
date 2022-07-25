import React, { useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./components/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Solo funcionara cuando te logues

    auth.onAuthStateChanged(authUser => {
      console.log("El usuario es ->", authUser);

      if (authUser) {
      //El usuario esta logeado o estaba 
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
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
            <Route path="/checkout">
              <Header />
              <Checkout />
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
