import React, {useEffect} from "react";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function App() {
  useEffect(() => {
    document.title = "Preston Tran";  
    const link = document.querySelector('link[rel="icon"]');

    if (link) {
      link.setAttribute('href', "favicon.png");
    }
  }, []);

  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </main>
  );
}