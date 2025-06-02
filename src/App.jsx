import React from "react";
import './App.css';
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import LetsTalk from "./components/letsTalk";
import Certificates from "./components/certificates";

function App() {
  return (
    <>
      <div >
        <Header />
        <AboutMe />
        
        <Projects />
        <Testimonials />
        <Certificates />
        <LetsTalk />
        <Footer />

        
      </div>
    </>
   
  )
}

export default App
