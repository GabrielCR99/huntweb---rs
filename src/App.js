import React from "react";
import Header from "./components/Header";
import "./styles.css";
import Main from "./pages/main";
import Routes from "./routes";
import { Route } from "react-router-dom";
const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
