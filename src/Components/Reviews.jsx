import { useGlobalContext } from "../Contex/GlobalContext"
import Stars from "./Stars"

function Reviews() {
  const{movie} = useGlobalContext()

  return (
     <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-5">
         <div className="flex items-center justify-between mb-4">
           <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">RECENSIONI</h5>
         </div>
            {movie?.reviews?.length === 0 ? 'NON CI SONO RECENSIONI' : 
              movie?.reviews?.map(review => 
              <> 
              <div key= {review.id} className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                  <li className="py-3 sm:py-4">
                   <div className="flex items-center">
                      <div className="shrink-0">
                       <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                       <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                       </svg>
                      </div>
                  
                     <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                           {review?.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {review?.text}
                        </p>
                     </div>

                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Stars vote={review?.vote}/>
                     </div>
                    </div>
                 </li>
               </ul>
              </div>
            </>
           )}
</div>
  )
}

export default Reviews