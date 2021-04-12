import React ,{useState} from 'react'

import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from './components/InfoSection/Data';
import Navbar from './components/Navbar'
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyled';
import Services from './components/services/index'
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch} from 'react-router-dom';


function App() {
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen);
  }

  return (
    <div>
      <GlobalStyle />
      <Router>
      
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
      </Router>
      
      
    </div>
  );
}

export default App;
