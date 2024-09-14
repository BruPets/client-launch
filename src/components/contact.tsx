import React from 'react'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    console.log(formData)
  }

  return (
    <section className='h-screen'>
      <div className='py-6 px-10 mx-auto bg-gray-50 rounded-lg shadow-lg max-w-screen-md'>
        <h2 className='mb-4 text-2xl tracking-tight font-extrabold text-secondary text-center '>
          Contacto
        </h2>
        <p className='mb-8 font-light text-justify text-tertiary '>
          Si tienes un problema técnico o quieres hacer una consulta, no dudes en contactarnos. Estamos aquí para ayudarte.
        </p>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-secondary'
            >
              Tu email
            </label>
            <input
              type='email'
              id='email'
              className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='example@email.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-secondary'
            >
              Asunto
            </label>
            <input
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light'
              placeholder='En que puedo ayudarte?'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-secondary'
            >
              Tu mensaje
            </label>
            <textarea
              id='message'
              rows={6}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
              placeholder='Tu mensaje'
            />
          </div>
          <button
            type='submit'
            className='py-3 px-5 text-sm font-medium text-center rounded-lg bg-auxiliar  hover:bg-auxiliar/45 focus:ring-4 focus:outline-none'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
