import { Studentsdetails } from "../Studentsprovider";
import { useContext } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
function Favouritecard(){

   
function remove(id){
      const tfavstudent = favstudent.filter(function(item){
         if(id===item.id){
            return(false)
         }else{
            return(true)
         }
       })
       setfavstudent(tfavstudent)
}

   const {favstudent ,setfavstudent} = useContext(Studentsdetails)
   return (
      <div>
        { favstudent.length ===0? 
        <div className="text-center bg-white p-7 text-2xl flex flex-col gap-3">
          <p >No favourite students added yet.</p>
          <p>Go to Student list and add some one!</p>
        </div>
         
:
         <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5'>
            {favstudent.map(function(item) {

                const isFavourite = favstudent.find(function(fav) {
                    return fav.id === item.id
                })

                return (
                    <div key={item.id} className='bg-white mx-2 rounded-md p-3.5 flex flex-col gap-1 my-4'>
                        <h1>Name: {item.Name}</h1>
                        <p>Rollno: {item.Rollno}</p>
                        <p>Course: {item.Course}</p>
                        <button
                            onClick={()=>{remove(item.id)}}
                            className='border-2 border-red-500 px-2 py-1 mx-4 my-2 rounded-[50px] hover:bg-red-500 cursor-pointer'>
                            Remove
                        </button>
                    </div>
                )
            })}
        </div>}
        </div>
    )
   
}


export default Favouritecard