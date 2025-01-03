import { Route,
   createBrowserRouter, createRoutesFromElements,
  RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AddJob from './pages/AddJob'
import Jobs from './pages/Jobs'
import Test from './pages/Test'
import NotFound from './pages/NotFound'
import JobPage, {JobLoader} from './pages/JobPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/AddJob' element={<AddJob />}/>
      <Route path='/Jobs' element={<Jobs />}/>
      <Route path='/jobs/:id' element={<JobPage />} loader={JobLoader}/>
      <Route path='/Test' element={<Test />}/>
      <Route path='*' element={<NotFound />}/>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App