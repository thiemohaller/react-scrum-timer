import { useEffect, useState } from 'react'

interface ICountdown {
    minutes: number;
    seconds: number;
}

const CountDownTimer = ({ minutes = 1, seconds = 0 }: ICountdown) => {
    const [time, setTime] = useState<ICountdown>({ minutes, seconds })
    const [isRunning, setIsRunning] = useState<boolean>(false)
    const [bgColor, setBgColor] = useState<string>('#20A956')

    const [failureMessage, setFailureMessage] = useState<string>('')

    const tick = () => {
        if (isRunning) {
            if (time.minutes === 0 && time.seconds === 0) {
                setIsRunning(false)
                setBgColor('#A82820')
                setFailureMessage('We\'re not mad, just disappointed </3')
                reset()
            }
            else if (time.seconds === 0) {
                setTime({ minutes: time.minutes - 1, seconds: 59 });
            } else {
                setTime({ minutes: time.minutes, seconds: time.seconds - 1 });
            }
        }
    };

    // const reset = () => setTime({ minutes: time.minutes, seconds: time.seconds });
    const reset = () => setTime({ minutes: 1, seconds: 0 });

    function startOrStopTimer() {
        if (isRunning) {
            setIsRunning(false)
            setFailureMessage('Nailed it - Someone somewehere is proud of you, probably :)')
        } else {
            setIsRunning(true)
            setBgColor('#20A956')
            setFailureMessage('')
            reset();
        }
    }

    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div style={{ backgroundColor: bgColor }}>
            <div className='text-white font-bold'>
                <p>{`${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
            </div>
            <div className='text-4xl'> {failureMessage} </div>
            <button type="button" onClick={() => startOrStopTimer()}
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                Reset/Next
            </button>
        </div>
    );
}

export default CountDownTimer;
