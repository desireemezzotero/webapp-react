import { useParams, Link} from "react-router-dom"
import { useGlobalContext } from "../Contex/GlobalContext"

function CardDetails() {
  const {id} = useParams()
  const {movie, deleteMovie} = useGlobalContext()
  

  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

      <img className="rounded-t-lg" src={movie?.img} alt="" />
      <h5>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Titolo:
        </span>
        {movie?.title}
      </h5>

      <p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Genere:
       </span>
       {movie?.reviews?.genre}
      </p>

      <p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
           Anno di produzione:
       </span>
       {movie?.release_year}
      </p>

      <p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Descrizione:
       </span>
       {movie?.abstract}
      </p>

      <div className="mt-4">
         <Link className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to = "/">
           Torna indietro
         </Link>

        <Link className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to = "/" onClick={() => {
             if( confirm ('sicuro di eliminare?')){
              deleteMovie(movie.id)
             }}
            }> <i class="fa fa-trash" aria-hidden="true"></i></Link>
      </div> 

   </div>
  )
}

export default CardDetails