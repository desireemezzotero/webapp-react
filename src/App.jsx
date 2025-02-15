import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Contex/GlobalContext";
import DefaultLayout from "./Layouts/DefaultLayout";
import Homepage from "./Pages/Homepage";
import Details from "./Pages/Details";
import About from "./Pages/About"
import AddMovie from "./Pages/AddMovie";

function App() {
  return (
   <>
   <GlobalProvider>
    <BrowserRouter>
     <Routes>
      <Route element={<DefaultLayout/>}>
       <Route path='/' element= {<Homepage />}/>
       <Route path='/:id' element= {<Details />}/>
       <Route path='/chi-siamo' element= {< About/>}/>
       <Route path='/aggiungi-film' element= {< AddMovie/>}/>
      </Route>
     </Routes>  
    </BrowserRouter>
   </GlobalProvider>
   </>
  )
}

export default App