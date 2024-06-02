import Logo from '../assets/logo.png'

const Info = () => {
  return (
    <div className='flex-col px-4 mt-16 w-full min-h-screen'>
      <img className='h-80 mx-auto' src={Logo} alt='Logo brupets' />
      <p className='text-lg mt-10 text-justify max-w-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        vitae excepturi eius vel distinctio nisi corrupti asperiores illo sequi
        molestiae praesentium provident pariatur laborum, voluptate quo ipsa,
        quidem laudantium sapiente.
      </p>
    </div>
  )
}

export default Info
