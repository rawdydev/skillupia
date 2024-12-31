import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AddJob from './pages/AddJob'
import Jobs from './pages/Jobs'
import Test from './pages/Test'
import NotFound from './pages/NotFound'

const App = () => {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path='AddJob' element={<AddJob />}/>
          <Route path='Jobs' element={<Jobs />}/>
          <Route path='Test' element={<Test />}/>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App