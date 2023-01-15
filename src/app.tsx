import { useState } from "react";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
