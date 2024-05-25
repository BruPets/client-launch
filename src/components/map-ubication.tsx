const MapUbication = () => {
  return (
    <div id='ubicacion' className='flex flex-col h-screen md:flex-row'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2 bg-tertiary'>
        <span className='text-3xl font-bold'>Ubicación</span>
        <p className='text-xl text-justify p-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          voluptas impedit, aut fugiat rem excepturi nemo placeat numquam velit
          ad illum similique temporibus dolore officiis, consequuntur laboriosam
          nulla. Nulla, laudantium.
        </p>
      </div>

      <iframe
        className='w-full md:w-1/2 p-10'
        title='Mapa de la agropecuaria'
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.2655790552949!2d-75.60178655795436!3d1.6069207209172194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e244fb63139ca8b%3A0x5ac144e14e0fe8a3!2sAgropecuaria%20Brupet&#39;s!5e0!3m2!1ses-419!2sco!4v1716586500696!5m2!1ses-419!2sco"
        loading='lazy'
      />
    </div>
  )
}

export default MapUbication
