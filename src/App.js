import './App.css';
import {useState} from 'react';
import React from 'react';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import SideNav from './components/SideNav';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
// import ContactForm from './components/ContactForm';

function App() {
const [visible, setVisible] = useState(false)
const [welcome, setWelcome] = useState(true)
const [about, setAbout] = useState(false)
const [contact, setContact] = useState(false)

  return (
    <>
    <Header setWelcome={setWelcome} welcome={welcome} about={about} visible={visible} setVisible={setVisible} setAbout={setAbout} />
    <SideNav setVisible={setVisible} visible={visible} setWelcome={setWelcome} welcome={welcome} setAbout={setAbout} about={about} contact={contact} setContact={setContact}/>
    {welcome && <Welcome />}
    {about && <AboutMe />}
    {/* {contact && <ContactForm />}  */}
    {visible && <div className="center">
                  <div className="project-gallery">
                    <ProjectGallery />
                  </div>                  
                </div>}
      
    </>
          
  );
}

export default App;
