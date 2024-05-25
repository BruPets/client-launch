import MapUbication from '../components/map-ubication'
import Counter from '../components/counter'
import Info from '../components/info'
import NavBar from '../components/nav-bar'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div>
      <NavBar />
      <div id='inicio' className='flex flex-col justify-center md:flex-row min-h-screen'>
        <Info />
        <Counter />
      </div>
      <MapUbication />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
