import { createContext } from "react";
import { useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

function GlobalProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState (false)

  const apiUrl = 'http://localhost:3000/movie'
  
  const fetchData =() => {
    setIsLoading(true)
    axios.get(apiUrl)
    .then (res => {
      setMovies(res.data)
    })
    .catch(err => console.log(err))
    .finally(()=> setIsLoading(false))
  }

  const fetchMovie = (id) => {
    setIsLoading(true)
    axios.get(`${apiUrl}/${id}`)
    .then(res=> {
      setMovie(res.data)
    })
    .catch(err => 
      console.log(err)
    )
    .finally(()=> setIsLoading(false))
  }

  const deleteMovie = ((id, cb) => {
    setIsLoading(true)
    axios.delete(`${apiUrl}/${id}`)
    .then (res => cb())
    .catch(err => console.log(err)) 
    .finally(()=> setIsLoading(false))
  })

  const value = {
    fetchData, /* chiamata api */
    movies, setMovies, /* useState per i film */
    fetchMovie, /* chiamata per il dettglio */
    movie, setMovie, /* useState per il dettaglio dei film */
    deleteMovie, /* eliminazione del film */
    setIsLoading
  }

  return (
    <GlobalContext.Provider value = {value}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}


export {GlobalProvider, useGlobalContext}