import Navbar from "../components/Navbar"

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

return (
  <>
  <div className='h-screen bg-black text-white pl-48 pt-48'>
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
  </>
) 
}

export default Test