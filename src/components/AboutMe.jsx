import '../styles/aboutMe.css'

export default function AboutMe () {
    return(
        <div className='content'>
            <div className='heading'>
                <h1>About Me</h1>
            </div>
            <div className='content-box'>
                <h2>Sebastian, como desarrollador frontend</h2>
                <h3>Soy Juan Sebastian Mendez Rodriguez, Desarrollador Web Front-end Auto-motivado con mucha disposicion de 
                    crecer laboralmente y seguir ampliando mi conocimiento en el desarrollo. Puedo hacer corrección 
                    de errores en su sitio web o agregar más características a sus sitios web. Puedo 
                    convertir su diseño deseado en trabajo real según su requisito. Pondré todo mi empeño y dedicacion 
                    para asegurar el 100% de satisfacción, entrega rápida y servicios de calidad. 
                    Trabajar conmigo significa trabajar en un ambiente relajado y amistoso.
                    Creatividad, Competencia Profesional y responsabilidad, son las palabras clave que describen mi trabajo.
                </h3>
                <div className='information-box grid'>
                    <div className='data'>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Birthday: </h4>
                            <p className='characteristics'>12/08/2004</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Age: </h4>
                            <p className='characteristics'>19</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Nationality: </h4>
                            <p className='characteristics'>Colombian</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>City: </h4>
                            <p className='characteristics'>Bogota</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Website </h4>
                            <p className='characteristics'><a href='/'>Click me</a></p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Email: </h4>
                            <p className='characteristics'>sebaslgr@gmail.com</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Phone: </h4>
                            <p className='characteristics'>+57 3228010388</p>
                        </div>
                        <div className='data-box'>
                            <h4 className='characteristics-heading'>Projects: </h4>
                            <p className='characteristics'><a href="./portfolio">Portfolio</a></p>
                        </div>
                    </div>
                    <div className='habilities'>
                        <div className='box-habilities'>
                            <h2>Mis Habilidades</h2>
                            <ul className='habilities-list'>
                                <li>
                                    HTML 
                                    <i className="fa-solid fa-check"></i>
                                </li>
                                <li>
                                    CSS
                                    <i className="fa-solid fa-check"></i>
                                </li>
                                <li>
                                    JavaScript
                                    <i className="fa-solid fa-check"></i>
                                </li>
                                <li>
                                    React.js
                                    <i className="fa-solid fa-check"></i>
                                </li>
                                <li>
                                    Node.js
                                    <i className="fa-solid fa-check"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='education-box 1'>
                        <h2>Education</h2>
                        <div className='education'>
                            <div className='details'>
                                <div className='year'>
                                    <i className="fa-solid fa-calendar"></i>
                                    <p> Culminado 2022</p>
                                </div>
                                <h3>Colegio de formacion integral mundo nuevo</h3>
                                <p>Estudios de bachiller finalizados en noviembre 2022</p>
                            </div>
                            <div className='details'>
                                <div className='year'>
                                    <i className="fa-solid fa-calendar"></i>
                                    <p> Culminado 2023</p>
                                </div>
                                <h3>Educamás</h3>
                                <p>Bootcamp Desarrollo web front-end</p>
                            </div>
                        </div>
                    </div>
                    <div className='experience'>
                        <h2>Experience</h2>
                        <h3>Coming soon...</h3>
                    </div>
                </div>
                </div>  
            </div>
    );
};