import { useState } from 'react'
import Logo from '../assets/logo.png'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const handleChange = () => setOpen(!open)

  return (
    <nav className='border-b bg-white'>
      <div className='flex items-center justify-between mx-auto p-4'>
        <a className='flex items-center space-x-2 rtl:space-x-reverse' href='/'>
          <img className='h-12' src={Logo} alt='Logo Brupets' />
          <span className='self-center text-2xl font-black text-secondary'>
            BRUPET'S
          </span>
        </a>

        <button
          onClick={handleChange}
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        >
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>
      <div
        onClick={handleChange}
        className={`${open ? 'relative' : 'hidden'} `}
      >
        <ul className='flex flex-col p-4 mt-4 border-t border-gray-100 bg-gray-50'>
          <li>
            <a
              href='#inicio'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href='#ubicacion'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Ubicación
            </a>
          </li>
          <li>
            <a
              href='#acerca'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href='#marcas'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Marcas
            </a>
          </li>
          <li>
            <a
              href='#blog'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href='#contacto'
              className='block py-2 px-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent'
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
