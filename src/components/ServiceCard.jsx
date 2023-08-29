import '../styles/services.css'

export default function ServiceCard () {
    return (
        <div className='content'>
            <h1>Services</h1>
            <div className='grid-services'>
                <div className='service'>
                    <div className='background-icon'>
                        <i className="fa-solid fa-code"></i>
                    </div>
                    <h3>Desarrollo Front-end</h3>
                    <p>Desarrollo profesional de sitios web, 
                        creando aplicaciones web dinámicas e interactivas adaptadas 
                        a sus requisitos específicos. Utilizando tecnologías modernas 
                        y las mejores prácticas para ofrecer resultados de alta calidad.
                    </p>
                </div>
                <div className='service'>
                    <div className='background-icon'>
                        <i className="fa-solid fa-window-maximize"></i>
                    </div>
                    <h3>Aplicacion personalizada web</h3>
                    <p>Creación de aplicaciones web front-end personalizadas desde cero,
                         Ya se trate de una plataforma de comercio electrónico, 
                         sitio de redes sociales, o cualquier otra aplicación web compleja, 
                         desarrollar soluciones escalables y robustas para satisfacer sus 
                         necesidades de negocio.
                    </p>
                </div>
                <div className='service'>
                    <div className='background-icon'>
                        <i className="fa-solid fa-wrench"></i>
                    </div>
                    <h3>Mantenimiento y soporte</h3>
                    <p>Me aseguro de que su sitio web permanezca actualizado, seguro y optimizado, 
                        lo que le permite centrarse en su negocio principal mientras yo me encargo 
                        de los aspectos técnicos.
                    </p>
                </div>
            </div>
        </div>
    );
};