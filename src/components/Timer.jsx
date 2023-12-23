import { useEffect } from "react"

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  useEffect(function(){
    const id = setInterval(function(){
      
      dispatch({ type: 'tick' })
    }, 1000);

    return ()=> clearInterval(id)
  
  }, [dispatch])

  return (
    <div className="timer">{mins <= 9 && '0'}{mins}:{seconds <= 9 && '0'}{seconds} </div>
  )
}

export default Timer