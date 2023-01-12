import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { About } from "./components/about";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
    </div>
  );
}

export default App;
