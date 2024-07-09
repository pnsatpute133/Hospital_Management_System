/* --- type rafce and press enter for code snippet ---*/
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Gallery from './Components/Gallery/Gallery'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Service1 from './Components/Service1/Service1'
import Service2 from './Components/Service2/Service2'
import Service3 from './Components/Service3/Service3'
import Service4 from './Components/Service4/Service4'
import SeeMore from './Components/SeeMore/SeeMore'
import Doctor from './Components/Doctor/Doctor'
//all of above are the components mounted


const App = () => {
   
  const [playState, setPlayState]=useState(false);

  // mount all the components here , mounting is the phase where our component gets inserted in DOM
  // title component used multiople times to we used props here to receive title and subtitle for all pages
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
         <Title subTitle='Our Services' title='What We Offer'/>
         <Services/>
         <About setPlayState={setPlayState}/> 
         <Title subTitle='Gallery' title='Hospital Photos'/>
         <Gallery/>
         <Title subTitle='Testimonials' title='What People Says'/>
         <Testimonials/>
         <Title subTitle='Contact Us' title='Get in Touch'/>
         <Contact/>
         <Service1/>
         <Service2/>
         <Service3/>
         <Service4/>
         <Title subTitle='Gallery' title='Hospital Photos'/>
         <SeeMore/>
         <Title subTitle='Doctors' title='Some of our Specialist'/>
         <Doctor/>
         
         <Footer/>
         <VideoPlayer playState={playState} setPlayState={setPlayState}/>
         
         

      </div>
      
    </div>
  )
}

export default App
