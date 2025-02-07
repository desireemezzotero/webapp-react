import { useGlobalContext } from "../Contex/GlobalContext"
import { useEffect } from "react"
import Carousel from "../Components/Carousel"

function Homepage() {
  const {fetchData,movies} = useGlobalContext()

  useEffect(fetchData, 
  [])

  return (
    <div>
       <Carousel />
    </div>
  )
}

export default Homepage