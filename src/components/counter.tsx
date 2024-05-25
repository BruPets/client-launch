import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Counter = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date()
    const nextDate = new Date('2024-6-1')
    const difference = nextDate.getTime() - now.getTime()

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    return timeLeft
  }
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className='flex flex-col justify-center items-center w-full my-4 bg-white'>
      <span className='text-xl font-semibold text-secondary'>
        ¡Abriremos pronto!
      </span>
      <div className='flex border border-primary shadow-lg mt-4'>
        {Object.keys(timeLeft).map((key) => (
          <div
            className='flex flex-col items-center border p-4 rounded-sm border-primary w-30'
            key={key}
          >
            <span className='font-extrabold text-4xl text-tertiary'>
              {timeLeft[key as keyof TimeLeft]}
            </span>
            <span className='uppercase font-semibold text-sm text-auxiliar'>
              {key}
            </span>
          </div>
        ))}
      </div>
      <a href='#ubicacion' className='text-customBlue hover:text-customBlue/70 mt-4'>
        ¡Aquí estamos!
      </a>
    </div>
  )
}

export default Counter
