import  "./index.css"
import NavCursos from './NavCursos'
import Pink from "/A.W.Pink-Los_Atributos_de_Dios.pdf"
import ReactPlayer from 'react-player/youtube'

export default function Cursos () {



return (

<>

<NavCursos/>

<h2>handleMouseLeave</h2>


<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



<p>
  <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button>
</p>






<h2>Series Numericas</h2>




<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Pink} target="_blank" rel="noopener"> 
      Ver PDF
      </a>
    </div>
</div>



<div>
    <div className='btn btn-primary'>
      <a className="fs-6 text-light"  href={Pink} target="_blank" rel="noopener noreferrer" download="Pink Los Atributos de Dios.pdf"> 
      Descargar PDF
      </a>
    </div>
</div>


<h2>hola responsive</h2>

<div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=KSujnzpRNq0'
          width='85%'
          height='40%'
          controls
        />
      </div>

<h1>hola</h1>










</>




);
}