import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
    </div>
  );
}

export default App;
