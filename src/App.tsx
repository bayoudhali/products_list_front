import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DefaultButton from "./components/buttons/defaultButton";
import NavBar from "./components/menus/navbar";
import ProductList from "./page/productList";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <ProductsList /> */}
      {/* <DefaultButton text="fefefe" onClick={() => console.log()} /> */}
      <ProductList />
    </div>
  );
}

export default App;
