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
    <div className='flex flex-col justify-center items-center w-full min-h-96 bg-tertiary/25'>
      <span className='text-6xl text-secondary font-bold pb-14'>
        ¡Próximamente!
      </span>
      <div className='flex border border-primary shadow-lg'>
        {Object.keys(timeLeft).map((key) => (
          <div
            className='flex flex-col items-center border p-4 border-primary w-30 h-full'
            key={key}
          >
            <span className='font-extrabold text-5xl text-tertiary'>
              {timeLeft[key as keyof TimeLeft]}
            </span>
            <span className='font-semibold uppercase text-auxiliar'>{key}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Counter
