import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./Contex/GlobalContext";
import DefaultLayout from "./Layouts/DefaultLayout";
import Homepage from "./Pages/Homepage";

function App() {
  return (
   <>
   <GlobalProvider>
    <BrowserRouter>
     <Routes>
      <Route element={<DefaultLayout/>}>
       <Route path='/' element= {<Homepage />}/>
      </Route>
     </Routes>  
    </BrowserRouter>
   </GlobalProvider>
   </>
  )
}

export default App