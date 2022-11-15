import './App.css';
import {useState} from 'react';
import React from 'react';
import Header from './components/Header';
import ProjectGallery from './components/ProjectGallery';
import SideNav from './components/SideNav';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import { useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {
const [visible, setVisible] = useState(false)
const [welcome, setWelcome] = useState(true)
const [about, setAbout] = useState(false)
const [contact, setContact] = useState(false)
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
  const imgs = [
    require('./images/bfh-large.jpg'),
    require('./images/bfh-large.webp'),
    require('./images/calc.jpg'),
    require('./images/calculator-large.jpg'),
    require('./images/calculator-large.webp'),
    require('./images/facthunt.jpg'),
    require('./images/finca-large.jpg'),
    require('./images/finca-large.webp'),
    require('./images/finca.jpg'),
    require('./images/mixer-large.jpg'),
    require('./images/mixer-large.webp'),
    require('./images/mixr.jpg'),
    require('./images/shorten.jpg'),
    require('./images/url-large.jpg'),
    require('./images/url-large.webp')
  ]

  cacheImages(imgs)
}, [])

const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image()

      img.src = src
      img.onload = resolve()
      img.onerror = reject()
    })
  })

  await Promise.all(promises)

  setIsLoading(false)
}

  return (
    <>
      {isLoading
      ?
      <Spinner />
      :

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
    }
    </>
          
  );
}

export default App;
