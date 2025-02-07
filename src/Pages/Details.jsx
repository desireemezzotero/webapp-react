import { useParams, Link} from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../Contex/GlobalContext"
import CardDetails from "../Components/CardDetails"

function Details() {
  const {id} = useParams()
  const {fetchMovie, movie,setMovie} = useGlobalContext()

  useEffect(() => fetchMovie(id), [setMovie])

  return (
    <div className="bg-black h-[calc(100vh-4rem)] flex items-center justify-center">
      <CardDetails />
  </div>
  )
}

export default Details