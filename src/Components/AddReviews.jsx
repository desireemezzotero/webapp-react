import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const AddReviews = ({fetchMovie}) => {
  const {id} = useParams()
  const apiUrl = 'http://localhost:3000/movie'

  const initialForm = {
    name: '',
    text: '',
    vote: ''
  }

  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')

  const FieldValue = (e) => {
    const {name,value} = e.target
    setForm (prev => ({
      ...prev,
      [name] : value
    }))
  }

  const validate = () => {
    if(!form.name || !form.text) return false
    if (form.vote < 1 || form.vote > 5) return false
    return true
  }

  const handlerSubmit = (e) => {
    e.preventDefault()
    
    if (!validate()) {
     setError('Controlla bene i dati, potrebbe esserci qualche errore, ricordati i dati sono obbligatori')
     return
    }
    
    axios.post(`${apiUrl}/${id}`, form, {headers:{"Content-Type": 'application/json'}})
      .then(res => {
        setForm(initialForm)
        setError('')
        fetchMovie(id)
      })
      .catch (err => 
        console.log(err)
      )
    }
  

  return (
    <> 
      <div className="bg-black items-center flex justify-center text-white ">
      <form className="w-full max-w-sm p-4" onSubmit={handlerSubmit}>
        <p className="text-red-700">{error}</p>
       <div className="md:flex md:items-center mb-6">
         <div className="md:w-1/3">
           <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Nome
           </label>
         </div>
         <div className="md:w-2/3">
           <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
           type="text" 
           name = "name"
           value = {form.name}
           onChange={FieldValue}/>
         </div>
       </div>

       <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
          <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Recensione
           </label>
          </div>
          <div className="md:w-2/3">
           <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
           type="text"
           name = "text"
           value = {form.text}
           onChange={FieldValue}
            />
         </div>
       </div>

       <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="text-gray-500 md:text-right mb-1 md:mb-0">
             Voto
            </label>
          </div>
          <div className="md:w-2/3">
           <input className="border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" 
           type="number"
           name = "vote"
           min= {1}
           max= {5}
           value = {form.vote}
           onChange={FieldValue} />
         </div>
       </div>
       <button type="submit" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Aggiungi</button>

      </form>
      </div>
    </>
  )
}
export default AddReviews