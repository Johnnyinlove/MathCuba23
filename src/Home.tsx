// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from "react-router-dom";
import svg from "./assets/react.svg";

import Footer from './Footer'
import Nav from './Nav'
import Slider from './Slider'
import ReactPlayer from 'react-player';


function App() {

  const navigate=useNavigate()
  


  return (
    <>

    <div className='App'>

<Nav/>
<Slider/>




<Footer/>

</div>

    </>
  )
}

export default App
