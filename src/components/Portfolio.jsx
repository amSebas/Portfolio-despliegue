import '../styles/portfolio.css'
import Pokedex from '../images/pokedex.PNG'
import Sabujcha from '../images/Sabujcha.PNG'

export default function Portfolio () {
    return(
        <div className='Primary-heading'>
            <h1>Portfolio</h1>
            <div className='projects-grid'>
                <div className='box-items'>
                    <center> <h2>Pokedex</h2> </center>
                    <div className='projects'>
                        <a href="https://pokedex-ruddy-theta.vercel.app/">
                            <img className='img-project' src={Pokedex} alt="pokedex" />
                        </a>
                    </div>
                </div>
                <div className='box-items'>
                    <center> <h2>To-do-list</h2> </center>
                    <div className='projects'>
                        <a href="https://react-list-phi.vercel.app/">
                            <img className='img-project' src={Sabujcha} alt="pokedex" />
                        </a>
                    </div>
                </div>
                <div className='box-items'>
                   <center> <h2>Dashboard</h2> </center>
                    <div className='projects'>
                        <a href="https://pokedex-ruddy-theta.vercel.app/">
                            <img className='img-project' src={Pokedex} alt="pokedex" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );   
};