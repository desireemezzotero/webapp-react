import { useParams, Link} from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../Contex/GlobalContext"
import CardDetails from "../Components/CardDetails"
import Reviews from "../Components/Reviews"

function Details() {
  const {id} = useParams()
  const {fetchMovie, movie,setMovie} = useGlobalContext()

  useEffect(() => fetchMovie(id), [id])

  return (
    <div className="bg-black h-[calc(100vh-4rem)] flex items-center justify-center">
      <CardDetails />
      <Reviews />
  </div>
  )
}

export default Details