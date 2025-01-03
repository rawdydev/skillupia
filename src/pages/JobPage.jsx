import { useParams, useLoaderData } from "react-router-dom"

const JobPage = () => {
  const { id } = useParams()
  const job = useLoaderData();
  
  return (
    <div>{job.title}</div>
  )
}

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/Jobs/${params.id}`);
  const data = await res.json();
  return data
}

export {JobPage as default, JobLoader}






// const [job, setJob] = useState(null)
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const fetchJob = async () => {
  //     try {
  //       const res = await fetch(`/api/Jobs/${id}`)
  //       const data = await res.json();
  //       setJob(data)
  //     } catch (error) {
  //       console.log("Failed to fetch the data error:", error)
  //     } finally {
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 1000);
        
  //     }
  //   }

  //   fetchJob()
  // }, [])