import { Route,
   createBrowserRouter, createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AddJob from './pages/AddJob'
import Jobs from './pages/Jobs'
import EditJobPage from './pages/EditJobPage'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
import JobPage, {JobLoader} from './pages/JobPage'



const App = () => { 
  // Adds a new job
  const addJob = async (newJob) => {
    const res = await fetch('https://rawdy-apis.vercel.app/jobs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });

    return;
  };

  // Delets a job
  const deleteJob = async (id) => {
    const res = await fetch(`https://rawdy-apis.vercel.app/jobs/${id}`, {
      method: 'DELETE',
    });
    
  }

  const updateJob = async (job) => {
    const res = await fetch(`https://rawdy-apis.vercel.app/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />}/>
        <Route path='/Add-job' element={<AddJob addJobSubmit={addJob}/>}/>
        <Route path='/Jobs' element={<Jobs />}/>
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={JobLoader}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={JobLoader}/>
        <Route path='/Test' element={<Test />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>;
}

export default App