const MapUbication = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center px-4'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
        <span className='text-xl font-semibold text-secondary'>Ubicación</span>
        <p className='text-md mt-4 text-center max-w-xl'>
          Estamos ubicados en la cuadra de los Bomberos Cartagena del Chaira, Caquetá. ¡Ven a ver
          todos los productos que tenemos para tus peluditos y tu granja!
        </p>
      </div>
      <iframe
        className="className='w-full h-4/6 pt-10 px-4'"
        title='Mapa de la agropecuaria'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7384119517733!2d-74.84623542503427!3d1.3331048986542617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244fb63139ca8b%3A0x5ac144e14e0fe8a3!2sAgropecuaria%20Brupet&#39;s!5e0!3m2!1ses-419!2sco!4v1726326024715!5m2!1ses-419!2sco"
        loading='lazy'
      />
    </div>
  )
}

export default MapUbication
