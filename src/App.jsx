import './App.css'
function App() {

  const changeBackground=(color)=>
  {
    document.body.style.backgroundColor=color;
  }

  return (
    <>
    
     <div className='d-flex flex-column justify-content-center align-items-center gap-5 mt-5 p-5'>
      <button onClick={()=>changeBackground("red")} className='btn btn-danger'>Click Here For RED Bg</button>
      <button onClick={()=>changeBackground("green")} className='btn btn-success'>Click Here For GREEN Bg </button>
      <button onClick={()=>changeBackground("blue")} className='btn btn-info'>Click Here For BLUE Bg </button>
      <button onClick={()=>changeBackground("black")} className='btn btn-dark'>Click Here For BLACK Bg </button>

      
     </div>
    </>
  )
}

export default App