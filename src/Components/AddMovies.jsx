import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useGlobalContext } from "../Contex/GlobalContext"

function AddMovies() {
  const apiUrl = 'http://localhost:3000/movie'
  const navigate = useNavigate()
  const {setIsLoading} = useGlobalContext()
  
  const initialForm = {
    title: '',
    genre: '',
    release_year: '',
    director: '',
    abstract: '',
    image: '',
  }

  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const validate = () => {
    if(!form.title || !form.genre || !form.release_year || !form.director || !form.abstract || !form.image   ) return false
    if (form.release_year < 1) return false
    return true
  }

  const FieldValue = (e) => {
   console.log(e.target)
    const {name,value} = e.target
    if (name === 'image') {
      setForm(prev => ({
        ...prev, 
        image:e.target.files[0]}))
    } else {
      setForm(prev => ({
        ...prev,
        [name] : value
      }))
    } 
  }

  const handlerSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      setError('Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori')
      return
     }
     
    const dataToSend = new FormData()
    for(let key in form) {
      dataToSend.append(key, form[key])
    }
    console.log(dataToSend)

    setIsLoading(true)
    axios.post(apiUrl, dataToSend, {headers:{"Content-Type": 'multipart/form-data'}})
    .then(() => navigate('/'))
    .catch(err => console.log(err))
    .finally(()=>  setIsLoading(false))
  }


  return (
    <div className="bg-black h-[calc(100vh-4rem)] ">
    <div className="bg-black items-center flex justify-center text-white ">
     <form className="p-4" onSubmit={handlerSubmit}>
      <p className="text-red-700">{error}</p>
       <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Titolo
           </label>
         </div>
         <div className="md:w-2/3">
            <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
            type="text" 
            name = "title"
            value = {form.title}
            onChange={FieldValue}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Genere
           </label>
         </div>
         <div className="md:w-2/3">
            <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
            type="text" 
            name = "genre"
            value = {form.genre}
            onChange={FieldValue}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Anno di produzione
           </label>
         </div>
         <div className="md:w-2/3">
            <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
            type="number" 
            name = "release_year"
            value = {form.release_year}
            onChange={FieldValue}/>
          </div>   
        </div>

        <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Direttore
           </label>
         </div>
         <div className="md:w-2/3">
            <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
            type="text" 
            name = "director"
            value = {form.director}
            onChange={FieldValue}/>
          </div>   
        </div>

        <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Descrizione
           </label>
         </div>
         <div className="md:w-2/3">
            <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
            type="text" 
            name = "abstract"
            value = {form.abstract}
            onChange={FieldValue}/>
          </div>   
        </div>

        <div className="md:flex md:items-center mb-6">

         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Immagine
           </label>
         </div>

          <div className="md:w-2/3">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
               <div className="flex flex-col items-center justify-center pt-5 pb-6">
                 <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                  </svg>
                 <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
               </div>
               <input id="dropzone-file" 
                type="file" 
                className="hidden" 
                name = "image"
                onChange={FieldValue}/>
             </label>
          </div> 
        </div> 
       <div className="items-center flex justify-center ">
         <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Aggiungi</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default AddMovies