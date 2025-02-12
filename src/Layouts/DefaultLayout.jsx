import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderNav";
import Loader from "../Components/Loader"

function DefaultLayout() {
  return ( 
    <>
     <Header/>
     <main>
     <Outlet />
     </main>
     <Loader/>
    </>
  )
}

export default DefaultLayout