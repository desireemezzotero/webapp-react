import { createContext } from "react";
import { useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

function GlobalProvider({children}) {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null)

  const apiUrl = 'http://localhost:3000/movie'
  
  const fetchData =() => {
    axios.get(apiUrl)
    .then (res => {
      console.log(res.data)
      setMovies(res.data)
    })
    .catch(err => console.log(err))
  }

  const fetchMovie = (id) => {
    axios.get(`${apiUrl}/${id}`)
    .then(res=> {
      setMovie(res.data)
    })
    .catch(err => 
      console.log(err)
    )
  }

  const value = {
    fetchData, /* chiamata api */
    movies, setMovies, /* useState per i film */
    fetchMovie, /* chiamata per il dettglio */
    movie, setMovie /* useState per il dettaglio dei film */
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