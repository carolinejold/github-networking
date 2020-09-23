import React from "react";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchPage />
    </div>
  );
};

export default App;
