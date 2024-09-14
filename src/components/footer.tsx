import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='self-center flex  text-2xl font-black text-secondary'>
            <img className='h-12 mr-3' src={Logo} alt='Logo Brupets' />
            BRUPET'S
          </div>

          <ul className='mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end'>
            <li>
              <a
                href='https://www.facebook.com/profile.php?id=61560426941764'
                rel='noreferrer'
                target='_blank'
                className='text-secondary transition hover:opacity-75'
              >
                <span className='sr-only'>Facebook</span>

                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='https://www.instagram.com/brupets_tienda/'
                rel='noreferrer'
                target='_blank'
                className='text-secondary transition hover:opacity-75'
              >
                <span className='sr-only'>Instagram</span>

                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='https://www.tiktok.com/@brupets_tienda'
                rel='noreferrer'
                target='_blank'
                className='text-secondary transition hover:opacity-75'
              >
                <span className='sr-only'>TikTok</span>

                <svg
                  className='h-6 w-6'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                >
                  <path d='M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z' />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16'>
          <div>
            <p className='font-medium text-gray-900'>Servicios</p>

            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  1on1 Coaching
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Company Review
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Accounts Review
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  HR Consulting
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  SEO Optimisation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Compañía</p>

            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Meet the Team
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Accounts Review
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Ayuda</p>

            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#contacto'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Contacto
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className='font-medium text-gray-900'>Legal</p>

            <ul className='mt-6 space-y-4 text-sm'>
              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Accessibility
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Returns Policy
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  href='#'
                  className='text-gray-700 transition hover:opacity-75'
                >
                  Hiring Statistics
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className='text-xs text-gray-500'>
          &copy; 2024.{' '}
          <a
            href='https://github.com/Dairo01001'
            target='_blank'
            rel='noopener noreferrer'
          >
            dairodev.
          </a>{' '}
          All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
