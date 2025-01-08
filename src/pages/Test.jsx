import Navbar from "../components/Navbar"
import { useState } from "react"

const Test = () => {
const name = "Rawdy"
const age = 10
const job = "Open to work"
const names = ['Spongbob', 'Patrick', 'Sandy', 'Plankton', 'Octapos']
const positions = ['UI UX', 'WP', 'AI / ML', 'Back-end', 'front-end']


const styles = {
  marginBottom: '40px',
  color: "red", 
  border: "2px white solid",
  display: "inline-block",
  padding: "8px 20px",
  borderRadius: "5px"

}
const loged = false

const [time, setTime] = useState(12);

return (
  <>
  <div className='h-screen bg-black text-white pl-48 pt-48'>
    <div className="first">
      <div style={styles}>
        {loged ? <p>Welcom {name}</p> : ""}
        {!loged && "Sign in"}
      </div>
      
      <div className='mb-10'>
        <div className=''>User status</div>
        <div>Name: {name}</div>
        <div>Age: {age + 9}</div>
        <div>Job descreption: {job}</div>
      </div>

      <div>
        {names.map((name, i) => (
          <p key={i}>{i + 1} {name}</p>
        ))}        
      </div>
    </div>
  
    <div className="second">
      <h2 className="mb-5">
        Time: 12:{time} 
      </h2>

      <button className="mr-2 mb-2 py-2 px-5 bg-indigo-500 " onClick={() => setTime(time + 1)}>1 minute</button>
      <button className="mr-2 mb-2 py-2 px-5 bg-indigo-500 " onClick={() => setTime(time + 5)}>5 minute</button>
      <button className="mr-2 mb-2 py-2 px-5 bg-indigo-500 " onClick={() => setTime(time + 10)}>10 minute</button>
<hr />
      <button className="mr-2 mb-2 py-2 px-5 bg-indigo-500 " onClick={() => setTime(time - 1)}>-1 minute</button>
      <button className="mr-2 mb-2 py-2 px-5 bg-indigo-500 " onClick={() => setTime(time - 10)}>-10 minute</button>
    </div>
  </div>
  </>
) 
}

export default Test