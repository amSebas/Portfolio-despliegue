import '../styles/contact.css'
import { useForm } from "react-hook-form"
import emailjs from 'emailjs-com';

export default function Contact () {
    const { register, formState:{ errors }, reset , handleSubmit } = useForm();

  const onSubmit = (dataForm) => {
    const templateParams = {
      from_name: dataForm.name,
      from_email: dataForm.email, 
      message: dataForm.message
    }
    
    emailjs.send(
      'service_vfku1yv', 
      'template_cd2wjzj', 
       templateParams ,
      'LRxNH6JKhqn7_y75P'
    )

    .then((response) => {
      console.log("Correo enviado exitosamente", response);
    })
    .catch((error) => {
      console.error("Error al enviar el correo", error);
    });
    
    console.log(dataForm);
    reset()
  };
    return(
        <div className='content'> 
            <h1>Contact</h1> 
            <h2 className='question'>Tienes alguna pregunta?</h2>
            <div className='contact'>
                <div className='card-content'>
                    <i className="fa-solid fa-phone"></i>
                    <h2>Llamame!</h2>
                    <h3>+57 3228010388</h3>
                </div>
                <div className='card-content'>
                    <i className="fa-solid fa-location-dot"></i>
                    <h2>Ubicación</h2>
                    <h3>Bogota, Colombia</h3>
                </div>
                <div className='card-content'>
                    <i className="fa-solid fa-envelope"></i>
                    <h2>Enviame un email</h2>
                    <h3>sebaslgr@gmail.com</h3>
                </div>
            </div>
            <div className='text-before-form'>
              <h2>Enviame un email</h2>
              <h3>¡Soy muy atento!</h3>
            </div>
            <form className='grid-input' id='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='content-input'>
                    <input type="text" className='name' placeholder='nombre' {...register('name', {required: true, maxLength: 25,})} />
                    {errors.name?.type === 'required' && <p className='red'>Debes escribir tu nombre</p>}
                    {errors.name?.type === 'maxLength' && <p className='red'>Puedes escrbir maximo 25 caracteres</p>}
                </div>
                <div className='content-input'>
                    <input type="text" className='email' placeholder='email'{...register('email', {required: true, pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}   />
                    {errors.email?.type === 'required' && <p className='red'>Debes escribir tu email</p>}
                    {errors.email?.type === 'pattern' && <p className='red'>Escribe un email valido</p>}

                </div>
                <div className='content-input'>
                    <textarea type="text" className='message' placeholder='mensaje'{...register('message', {required: true})} />
                    {errors.message?.type === 'required' && <p className='red'>Escribe un mensaje</p>}
                    <input type='submit' className='btn-submit' value='Enviar'/>
                </div>
            </form>
        </div>
    )
}