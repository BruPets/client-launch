const MapUbication = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center px-4'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2'>
        <span className='text-xl font-semibold text-secondary'>Ubicación</span>
        <p className='text-md mt-4 text-center max-w-xl'>
          Estamos ubicados en el Terminalito en Florencia, Caquetá. ¡Ven a ver
          todos los productos que tenemos para ti y tus peluditos!
        </p>
      </div>
      <iframe
        className='w-full h-4/6 pt-10 px-4'
        title='Mapa de la agropecuaria'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.2655790552949!2d-75.60178655795436!3d1.6069207209172194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244fb63139ca8b%3A0x5ac144e14e0fe8a3!2sAgropecuaria%20Brupet&#39;s!5e0!3m2!1ses-419!2sco!4v1716586500696!5m2!1ses-419!2sco"
        loading='lazy'
      />
    </div>
  )
}

export default MapUbication
