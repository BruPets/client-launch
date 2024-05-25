import Logo from '../assets/logo.png'

const Info = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 w-full '>
      <img className='h-80' src={Logo} alt='Logo brupets' />
      <p className='text-lg mt-4 text-justify max-w-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        vitae excepturi eius vel distinctio nisi corrupti asperiores illo sequi
        molestiae praesentium provident pariatur laborum, voluptate quo ipsa,
        quidem laudantium sapiente.
      </p>
    </div>
  )
}

export default Info
