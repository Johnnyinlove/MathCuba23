import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.tsx'
import './index.css'
// import Contrasena from "./Cont rasena.tsx";
import Horario from './Horario.tsx'
import NotFound from "./NotFound.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Cursos from "./Cursos.tsx"
import  Autor  from "./Autor.tsx";
import Perfil from './Perfil.tsx';
import Contrasena from "./Contrasena.tsx";
import Valid from "./Validation.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Perfil/> }/>
      <Route path='/Home' element={<Home/> }/>
      <Route path='/Horario' element={<Horario/> }/>
      <Route path='/Cursos' element={<Cursos/> }/>
      <Route path='/Contrasena' element={<Contrasena/> }/>
      <Route path='/Autor' element={<Autor/> }/>
      <Route path='/*' element={<NotFound/> }/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
