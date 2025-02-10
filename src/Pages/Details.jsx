import { useParams, Link} from "react-router-dom"
import { useEffect } from "react"
import { useGlobalContext } from "../Contex/GlobalContext"
import CardDetails from "../Components/CardDetails"
import Reviews from "../Components/Reviews"
import AddReviews from "../Components/AddReviews"

function Details() {
  const {id} = useParams()
  const {fetchMovie, movie,setMovie} = useGlobalContext()

  useEffect(() => fetchMovie(id), [id])

  return (
    <>
    <div className="bg-black h-[calc(100vh-4rem)] flex items-center justify-center">
      <CardDetails />
      <Reviews />
    </div>
    <div className="items-center bg-black text-white flex justify-center pt-6">
      <h3 className="text-4xl">Aggiungi una recensione</h3>
    </div>
    <AddReviews fetchMovie={fetchMovie}/>
    </>
  )
}

export default Details