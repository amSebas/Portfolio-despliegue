import '../styles/home.css'
import CV1 from '../images/CV1.png'

export default function Home () {
    return(
        <div className='content'>
            <div className='after'>
                <h1>Home</h1>
            </div>
            <div className='box-1'>
                <div className='text-box'>
                    <h2 className='righty-animation'>¡Hola!, Soy Juan Sebastian Mendez Rodriguez</h2>
                    <h3 className='righty-animation'>Desarrollador web front-end</h3>
                    <h3 className='lefty-animation'>Como desarrollador front-end me especializo en crear sitios web dinamicos y responsivos haciendo uso de herramientas como HTML5, CSS3, JavaScript,Figma, librerias como react.js,
                        node.js y conocimiento de metodologias agiles.
                    </h3>
                    <div className='buttons'>
                        <a className='btn' href='./AboutMe'>Mas acerca de mi</a>
                        <a className='btn' href='https://drive.google.com/file/d/13MnaIhoQS_gSZBMarazLKBejmPArHey4/view?usp=sharing'>Descargar cv</a>
                    </div>
                    <div className='social-media'>
                        <a href='https://www.linkedin.com/in/juan-sebastian-mendez-rodriguez-b0b505265/'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://torre.ai/juansebastianmendezrodriguez?view=opportunities-dialog&r=bDammMXp'><i className="fa-solid fa-tower-observation"></i></a>  
                        <a href='https://api.whatsapp.com/send?phone=573228010388&text=hola%2C%20me%20interesa%20contratar%20tus%20servicios'><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div className='photo-presentation'>
                    <img src={CV1} alt="CV" className='my-photo' />
                </div>
            </div>
        </div>  
    );
}