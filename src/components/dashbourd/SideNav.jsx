import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidenav({children}){
    const [isopen,setisopen]=useState(false)
    const handleisopen=()=>{
        setisopen(true)
    }
    const handleclose=()=>{
        setisopen(false)
    }
    return(
        <div>
    <div style={{width:isopen === true? '100px': ''}} className='transition-all duration-500 overflow-hidden fixed to bg-rose-500 h-screen sm:w-[20%] w-[50%] border-r-2 border-gray-300 text-white'>
    <i onClick={handleisopen} class="fa-solid fa-xmark text-white text-4xl sm:ml-[208px] ml-[140px] mt-2" ></i>
    <i onClick={handleclose} style={{display:isopen === true ? 'block' :'none'}}  class="fa-solid fa-bars px-2 text-white text-2xl sm:text-4xl hidden " ></i>

<div style={{display:isopen === true ? 'none' :'flex'}} className='ml-12 mt-10 text-2xl flex flex-col gap-12  '>
   <NavLink to={'/'} className="cursor-pointer hover:underline">  <i class="fa-brands fa-microsoft" ></i>Dashboard</NavLink>
   <NavLink to={'/product'} className="cursor-pointer hover:underline"> <i class="fa-solid fa-bag-shopping" ></i>Product</NavLink>
   <NavLink to={'/service'} className="cursor-pointer hover:underline"> <i class="fa-solid fa-image-portrait" ></i> Service</NavLink>
   <NavLink to={'/parent'} className="cursor-pointer hover:underline"> <i class="fa-solid fa-table-cells" ></i> Parent</NavLink>
   <NavLink to={'/attendance'} className="cursor-pointer hover:underline"><i class="fa-solid fa-table-cells"></i>Atendence</NavLink>
   <NavLink to={'/help'} className="cursor-pointer hover:underline">  <i class="fa-solid fa-headphones" ></i>Help</NavLink>

    </div>

 <div style={{display:isopen === true ? 'flex' :'none'}} className="flex-col  px-2  text-3xl gap-14 hidden">
 <i class="fa-brands fa-microsoft" ></i>
 <i class="fa-solid fa-bag-shopping" ></i>
 <i class="fa-solid fa-image-portrait" ></i>
 <i class="fa-solid fa-table-cells" ></i>
 <i class="fa-solid fa-headphones" ></i>
 </div>

    </div>
    <div style={{marginLeft:isopen === true? '150px':""}} id="main" className="sm:ml-[25%] ml-[30%] transition-all duration-500">
{children}
    </div>
        </div>
    )
}