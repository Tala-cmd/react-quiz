import { useQuiz } from "../context/QuizContext"

function RestartButton() {
  const {dispatch} = useQuiz()

  function handleClearList() {
    const confirmed = window.confirm(
        "Are you sure you want to restart the exam?"
    );
    if (confirmed) dispatch({ type: "restart" });
  }

  return (
      <button  
        onClick={handleClearList} 
        className="btn-restart">
        Restart
      </button>
  )
}

export default RestartButton