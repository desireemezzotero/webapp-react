import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Contex/GlobalContext";
import DefaultLayout from "./Layouts/DefaultLayout";
import Homepage from "./Pages/Homepage";
import Details from "./Pages/Details";

function App() {
  return (
   <>
   <GlobalProvider>
    <BrowserRouter>
     <Routes>
      <Route element={<DefaultLayout/>}>
       <Route path='/' element= {<Homepage />}/>
       <Route path='/:id' element= {<Details />}/>
      </Route>
     </Routes>  
    </BrowserRouter>
   </GlobalProvider>
   </>
  )
}

export default App