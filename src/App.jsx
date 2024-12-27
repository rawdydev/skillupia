import React from 'react'

const App = () => {
  const name = "Rawdy"
  const age = 10
  const job = "Open to work"
  

  return (
    <div className='h-screen bg-black text-white'>
    <div className=''>User status</div>
    <div>Name: {name}</div>
    <div>Age: {age + 9}</div>
    <div>Job descreption: {job}</div>
    </div>
  ) 
}

export default App