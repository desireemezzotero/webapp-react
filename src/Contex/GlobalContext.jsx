import { createContext } from "react";
import { useState, useContext } from "react";
import axios from "axios";

const GlobalContext = createContext()

function GlobalProvider({children}) {
  const [movies, setMovies] = useState([]);

  const apiUrl = 'http://localhost:3000/movie'
  
  const fetchData =() => {
    axios.get(apiUrl)
    .then (res => {
      setMovies(res.data)
    })
    .catch(err => console.log(err))
  }

  const value = {
    fetchData, /* chiamata api */
    movies, setMovies, /* useState per i film */
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