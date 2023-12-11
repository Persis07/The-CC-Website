import React from "react";
import Header from "../src/components/header/Header.jsx";

import APGPistachioThumb from "../src/Assets/APG_Pistachio_thumbs.jpg";
import DHPure from "../src/Assets/DH_Pure_thumb.jpg";
import DSthumb from "../src/Assets/DS_thumb.jpg";
import BBQthumb from "../src/Assets/BBQ_Thumb.jpg";
import Hofguthafermilch from "../src/Assets/Hofgut_hafermilch_Thumb.jpg";
import DHaktiv from "../src/Assets/DH_Aktiv.jpg";
import DHsystem from "../src/Assets/DH_System_thumb.jpg";
import DreiMeister from "../src/Assets/Dreimeister_katalog_Thumbs.jpg";
import DHtiere from "../src/Assets/Cases_Thumb_af_4.jpg";
import MediceThumb from "../src/Assets/Medice_soventol_thumb.jpg";
import '../src/App.css'

function App() {
  
  const projects = [
    { id: 1, image: APGPistachioThumb, title: 'PR', description: 'APG Pistachios', size: 'large' },
    { id: 2, image: DHPure, title: 'Packaging Design', description: 'DH Pure', size: 'medium' },
    { id: 3, image: DSthumb, title: 'Food', description: 'Deutschesee', size: 'small' },
    { id: 4, image: BBQthumb, title: 'Beverage', description: 'Branden B. quelle', size: 'large' },
    { id: 5, image: Hofguthafermilch, title: 'Beverage', description: 'Hofgut Hafermilch', size: 'medium' },
    { id: 6, image: DHaktiv, title: 'Pharma', description: 'DH Aktiv', size: 'small' }, 
    { id: 7, image: DHsystem, title: 'Pharma', description: 'DH System', size: 'medium' },
    { id: 8, image: DHtiere, title: 'Packaging Design', description: 'DH Tiere', size: 'small' },
    { id: 9, image: MediceThumb, title: 'Project 10', description: 'Pharma', size: 'large' },
    { id: 10, image: DreiMeister, title: 'Coporate Design', description: 'Dreimeister Katalog', size: 'medium' },
  ];



  return (
    <>
     
      <Header/>
     

     <main>
     <div className="welcome-section">
          <h1>
          Moin, wir sind Colell und Čakar Design.</h1>
            </div>
            <p className="paragraph">Interdisziplinäre Designagentur aus Hamburg.
            <br />
            Wir machen Markendesign!
            <br />
            </p>

            <section className="brand-animation">
            <div className="black-section">
            <div className="centered-content">
            <img src="./src/Assets/CČ Logo animation_1.gif" alt="Logo animation" />

           </div>
           </div>

            </section>


          


        <h1 className="project-section">Projekte</h1>
        <p className="paragraph">Ob Weiterentwicklung oder Aufbau von Marken:
        <br />
          Auf Grundlage der Briefing-Ziele, Marken-DNA, Positionierung 
          und
          <br />
          Zielgruppen-Bedürfnisse, entwickeln wir passgenaues Design.
        </p>
        <div className="portfolio-container">
          {projects.map((project) => (
            <div key={project.id} className={`project ${project.size}`}>
              <img src={project.image} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      
    </>
  )
}

export default App
