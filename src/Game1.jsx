import React, {useState, useEffect, useRef} from 'react'
import paper from './assets/paper.jpeg'
import rock from './assets/rock.png'
import sciesor from './assets/sciesors.png'

export default function Game1() {

  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setComScore] = useState(0);
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(0);
  const resultRef = useRef(null);

  useEffect(() => {

      if(userChoice === null) {
        setResult('Start Game');
      } else
      if(compChoice === userChoice) {
        setResult('Draw!🥱');
      } else if(compChoice === 'rock' && userChoice === 'paper') {
        setResult('You Win!🤩');
        setUserScore(userScore + 1);
      } else if(compChoice === 'rock' && userChoice === 'sciesor') {
        setResult('Computer Win!🤖');
        setComScore(compScore + 1);
      } else if(compChoice === 'paper' && userChoice === 'rock') {
        setResult('Computer Win!🤖');
        setComScore(compScore + 1);
      } else if(compChoice === 'paper' && userChoice === 'sciesor') {
        setResult('You Win!🤩');
        setUserScore(userScore + 1);
      } else if(compChoice === 'sciesor' && userChoice === 'rock') {
        setResult('You Win!🤩');
        setUserScore(userScore + 1);
      } else if(compChoice === 'sciesor' && userChoice === 'paper') {
        setResult('Computer Win!🤖');
        setComScore(compScore + 1);
      }

  },[count]);

  const calRandom = () => {
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) setCompChoice('rock');
    else if(randomNumber == 1) setCompChoice('paper');
    else if(randomNumber == 2) setCompChoice('sciesor');
  };

  const handleCLick = () => {
    setCount(count +1);
    calRandom();
    
  };

  const handleMouseDown = () => {
    // document.querySelectorAll('m').forEach
  }

  const handleMouseUp = () => {

  };

  useEffect(() => {
    if(resultRef.current) {
      if(result === 'You Win!') {
        resultRef.current.style.color = '#00b300';
      } else if(result === 'Computer Win!') {
        resultRef.current.style.color = 'red';
      } else if(result === 'Draw!') {
        resultRef.current.style.color = '#e6b800';
      }
    }
  },[result]);

  return (
    <div className='text-center pt-10 border-box font-serif h-screen w-full bg-cover bg-center' style={{ backgroundImage: `url('bg4.jpg')`}}>
        <h1 className='text-5xl font-bold text-black'>
          <span className='text-emerald-800'>Rock</span>-
          <span className='text-red-500'>Paper</span>-
          <span className='text-violet-700'>Sciesor</span>
        </h1>
        <div className='flex justify-center mt-12'>
            <div className='m-6 p-8 h-48 w-48 rounded-full bg-gray-400 cursor-pointer hover:bg-green-900 border-black border-2' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={() => {setUserChoice('rock'); handleCLick();}}>
              <img src={rock} className='h-32 w-32 rounded-2xl border-black border-2' alt='Rock'/>
            </div>
            <div className='m-6 p-8 h-48 w-48 rounded-full bg-gray-400 cursor-pointer hover:bg-red-950 border-black border-2' onClick={() => {setUserChoice('paper'); handleCLick();}}>
              <img src={paper} className='h-32 w-32 rounded-2xl border-black border-2' alt='Paper'/>
            </div> 
            <div className='m-6 p-8 h-48 w-48 rounded-full bg-gray-400 cursor-pointer hover:bg-violet-950 border-black border-2' onClick={() => {setUserChoice('sciesor'); handleCLick();}}>
              <img src={sciesor} className='h-32 w-32 rounded-2xl border-black border-2' alt='Sciesor'/>
            </div>
        </div>
        <div className='flex justify-center text-3xl font-bold text-grey-900'>
          <p className='m-4 ml-10'>You</p>
          <p className='m-4 ml-10'>Computer</p>
        </div>
        <div>
          <input readOnly value={userScore} className='bg-blue-500 text-white text-3xl w-24 h-12 m-6 text-center rounded'  />
          <input readOnly value={compScore} className='bg-blue-500 text-white text-3xl w-24 h-12 m-6 text-center rounded'  />
        </div>
        <br></br>
        <div className='flex justify-center'>
          <p className='text-4xl font-bold text-fuchsia-700 mr-32'>{userChoice?userChoice:'_____'}</p>
          <p ref={resultRef} className='text-4xl font-bold text-grey-900'>{result}</p>
          <p className='text-4xl font-bold text-fuchsia-700 ml-32'>{compChoice?compChoice:'_____'}</p>
        </div>
        
    </div>
  )
}
