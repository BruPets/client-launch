import MapUbication from '../components/map-ubication'
import Counter from '../components/counter'
import Info from '../components/info'
import NavBar from '../components/nav-bar'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Counter />
      <div id='inicio' className='border w-3/4 mx-auto' />
      <Info />
      <div id='ubicacion' className='border mx-6 border-tertiary' />
      <MapUbication />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
