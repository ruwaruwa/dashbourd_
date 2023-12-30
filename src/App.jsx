import { Route, Routes } from "react-router-dom"
import Sidenav from "./components/dashbourd/SideNav"
import Service from "./components/pages/Service"
import Product from "./components/pages/Product"
import Parent from "./components/pages/Parent"
import Attendance from "./components/pages/Attendence"
import Help from "./components/pages/Help"
import Dashbourd from "./components/dashbourd/Dashbourd"
function App(){
    return ( <Sidenav>
        <div className="bg-gray- textwhite">
    
           <Routes  >
           {/* <Route path="/log" element={<h1>page</h1>}/> */}
           
           <Route path="/" element={<Dashbourd/>}/>
           <Route path="/product" element={<Product/>}/>
           <Route path="/service" element={<Service/>}/>
           <Route path="/parent" element={<Parent/>}/>
           <Route path="/attendance" element={<Attendance/>}/>
           <Route path="/help" element={<Help/>}/>

           </Routes>
        </div>
        </Sidenav>
    )
}
export default App