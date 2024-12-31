import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'
import HomeCards from '../components/HomeCards'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage