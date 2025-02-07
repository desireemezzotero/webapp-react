import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderNav";


function DefaultLayout() {
  return ( 
    <>
     <Header/>
     <main>
     <Outlet />
     </main>
    </>
  )
}

export default DefaultLayout