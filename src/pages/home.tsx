import MapUbication from '../components/map-ubication'
import Counter from '../components/counter'
import Info from '../components/info'
import NavBar from '../components/nav-bar'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Carousel from '../components/carousel'

const images = [
  'https://1000logos.net/wp-content/uploads/2020/07/Purina-Logo-1536x960.png',
  'https://www.nestle.com.ar/sites/g/files/pydnoa481/files/Banner%20Pro%20Plan.jpg',
  'https://th.bing.com/th/id/OIP.NYzn-0tJ_eIwl1qr3gl8NwHaE8?rs=1&pid=ImgDetMain'
]

const Home = () => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Counter />
      <div id='acerca-de' className='border w-3/4 mx-auto' />
      <Info />
      <div id='ubicacion' className='border mx-6 border-tertiary' />
      <MapUbication />
      <div id='marcas' className='border mx-6 border-customBlue' />
      <div
        className='h-screen flex flex-col p-4 justify-center items-center'
      >
        <span className='text-xl font-semibold text-primary'>Marcas</span>
        <p className='text-md mt-4 text-justify max-w-xl'>
          Nos complace presentarles una selección de las mejores marcas del
          mercado para satisfacer todas sus necesidades agropecuarias. En
          nuestra tienda, nos esforzamos por ofrecer productos de alta calidad y
          confiabilidad, garantizando así el éxito de sus proyectos agrícolas y
          ganaderos
        </p>
        <Carousel images={images} />
      </div>
      <div id='contacto' className='border mx-6 border-primary' />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
