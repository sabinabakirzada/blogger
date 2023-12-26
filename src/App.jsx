import React from "react";
import "./App.css";
import Header from "./layouts/header";
import Latest from "./pages/latest";
import Toner from "./pages/toner";

const App = () => {
  return (
    <div>
      <Header />
      <Toner />
      <Latest />
    </div>
  );
};

export default App;
