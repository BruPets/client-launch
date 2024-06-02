import MapUbication from '../components/map-ubication'
import Info from '../components/info'
import NavBar from '../components/nav-bar'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Carousel from '../components/carousel'

const images = [
  {
    alt: 'Donkan',
    href: 'https://lirp.cdn-website.com/f167db5d/dms3rep/multi/opt/Logo+donkan-1920w.jpeg'
  },
  {
    alt: 'Filpo',
    href: 'https://ceragro.com/wp-content/uploads/2022/11/filpologo.png'
  },
  {
    alt: 'Chunky',
    href: 'https://th.bing.com/th/id/OIP.9abuOCA-Rjt0i9rfczR0zgHaFb?rs=1&pid=ImgDetMain'
  },
  {
    alt: 'Ringo',
    href: 'https://www.grupobios.co/portals/0/Images/Ringo.png?ver=2018-12-20-145837-337'
  },
  {
    alt: 'Mirringo',
    href: 'https://seeklogo.com/images/M/mirringo-logo-72CCFF23FA-seeklogo.com.png'
  },
  {
    alt: 'OhMaiCat',
    href: 'https://exiagricola.net/tienda/wp-content/uploads/2018/05/logo_oh-mai-gat.png'
  },
  {
    alt: 'Dogourmet',
    href: 'https://www.agrohacienda.com/wp-content/uploads/2015/08/dogourmet.jpg'
  },
  {
    alt: 'Monello',
    href: 'https://cdn.shopify.com/s/files/1/0008/0579/7941/collections/MON.jpg?v=1586813532'
  },
  {
    alt: 'DogChow',
    href: 'https://th.bing.com/th/id/R.c49611cb655584a9897b223dea5b9292?rik=wK8Bte5AA4jMNQ&riu=http%3a%2f%2ftoquedemujer.com%2fwp-content%2fuploads%2f2009%2f10%2fLogo-DC-.jpg&ehk=hKVBhk5vAogz%2btTaHGiaqmGZUXcXd%2fDSQvaE9wmPfD4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'
  }
]

const Home = () => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <Info />
      <div id='ubicacion' className='border mx-6 border-tertiary' />
      <MapUbication />
      <div id='marcas' className='border mx-6 border-customBlue' />
      <div className='h-screen flex flex-col p-4 justify-center items-center'>
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
