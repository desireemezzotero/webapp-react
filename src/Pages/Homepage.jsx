import { useGlobalContext } from "../Contex/GlobalContext"
import { useEffect } from "react"
import Carousel from "../Components/Carousel"

function Homepage() {
  const {fetchData,movies} = useGlobalContext()

  useEffect(fetchData, 
  [])

  return (
    <div className="bg-black h-[calc(100vh-4rem)] content-center text-center">
     <h1 className="mb-6 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">I PIÚ CONOSCIUTI</span></h1>
     <Carousel />
    </div>
  )
}

export default Homepage