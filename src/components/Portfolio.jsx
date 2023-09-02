import '../styles/portfolio.css'
import Pokedex from '../images/pokedex.PNG'
import ToDoList from '../images/To-do-list.PNG'
import Genero from '../images/genero_front.PNG'

export default function Portfolio () {
    return(
        <div className='content'>
            <h1>Portfolio</h1>
            <div className='projects-grid'>
                <div className='box-items'>
                    <h2>Genero-front </h2> 
                    <div className='projects'>
                        <a href="https://genero-front-six.vercel.app/">
                            <img className='img-project' src={Genero} alt="pokedex" />
                        </a>
                        <h3 className='description'>Description:</h3>
                        <div className='text-description'>
                            <p>Genero-front es un pagina que funciona como banco</p>
                            <p> de recursos acerca de las primeras olas del feminismo</p>
                        </div>
                        <a href='https://github.com/programateacademy/genero-front'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className='box-items'>
                    <h2>Pokedex</h2> 
                    <div className='projects'>
                        <a href="https://pokedex-ruddy-theta.vercel.app/">
                            <img className='img-project' src={Pokedex} alt="pokedex" />
                        </a>
                        <h3 className='description'>Description:</h3>
                        <div className='text-description'>
                            <p>Pokedex es una pagina que genera una tabla de los</p>
                            <p>primeros 150 pokemones consumiendo la api Poke.api</p>
                        </div>
                        <a href='https://github.com/JSebastian08/pokedex'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className='box-items'>
                    <h2>To-do-list</h2> 
                    <div className='projects'>
                        <a href="https://react-list-phi.vercel.app/">
                            <img className='img-project' src={ToDoList} alt="ToDo" />
                        </a>
                        <h3 className='description'>Description:</h3>
                        <div className='text-description'>
                            <p>To Do es una pagina en la cual se pueden añadir y</p>
                            <p>Eliminar tareas, tambien se puede cambiar el fondo</p>
                        </div>
                        <a href='https://github.com/amSebas/react-list'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
    );   
};