import { useState, useEffect} from 'react'
import JobListing from './JobListing'
import Spinner from '../components/Spinner';

const JobListings = ({isHome = false}) => {
  // const jobListings = isHome ? Jobs.slice(0, 3) : Jobs;
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      // const apiUrls = isHome ? "https://rawdy-apis.vercel.app/jobs?_limit=3" : "https://rawdy-apis.vercel.app/jobs";
      try {
        const res = await fetch("https://rawdy-apis.vercel.app/jobs")
        const data = await res.json();
        const filteredData = isHome ? data.slice(0, 3) : data;
        setJobs(filteredData)
      } catch (error) {
        console.log("Failed to fetch the data error:", error)
      } finally {
        setLoading(false)  
      }
    }

    fetchJobs()
  }, [])

  return (
  <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs' }
      </h2>
        {loading ? ( <Spinner loading={loading}/> ) : ( 
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
              <JobListing key={job.id} job={job}/>          
              ))}
            </div>
          </>
        )}
        
    </div>
  </section>
  )
}

export default JobListings