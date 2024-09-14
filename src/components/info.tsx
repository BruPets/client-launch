import Logo from '../assets/logo.png'

const Info = () => {
  return (
    <div className='flex-col px-4 mt-16 w-full min-h-screen'>
      <img className='h-80 mx-auto' src={Logo} alt='Logo brupets' />
      <p className='text-lg mt-10 text-justify max-w-xl'>
        En Agropecuaria Brupet's, nos dedicamos a ofrecer una amplia gama de
        productos de alta calidad para el cuidado de tus mascotas y el bienestar
        de tus animales de granja. Nuestro compromiso es ser tu socio de
        confianza en el cuidado animal, proporcionando soluciones integrales
        para todas tus necesidades agropecuarias.
      </p>
    </div>
  )
}

export default Info
