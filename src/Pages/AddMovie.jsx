import AddMovies from "../Components/AddMovies"

function AddMovie() {
  return (
    <>
    <div className="items-center bg-black text-white flex justify-center pt-6">
    <h3 className="text-4xl">Aggiungi un nuovo film</h3>
  </div>
   <AddMovies/>
    </>
  )
}

export default AddMovie