import { createContext, useState, } from "react"
const Studentsdetails = createContext()

function Studentsprovider(data){
    const [favstudent,setfavstudent]=useState([ ])

   const [studentdet,setstudentdet]=useState([
    {
    id:1,
    Name:"Santhosh",
    Rollno:"01",
    Course:"Full Stack Development"
    },
    {
    id:2,
    Name:"Aravind",
    Rollno:"02",
    Course:"Full Stack Development"
    },
    {
    id:3,
    Name:"Sunil",
    Rollno:"03",
    Course:"Full Stack Development"
    },
    {
    id:4,
    Name:"Sathish",
    Rollno:"04",
    Course:"Full Stack Development"
    },
    {
    id:5,
    Name:"Magesh",
    Rollno:"05",
    Course:"Full Stack Development"
    },
    {
    id:6,
    Name:"Lochanan",
    Rollno:"06",
    Course:"Full Stack Development"
    },
    {
    id:7,
    Name:"Priya",
    Rollno:"07",
    Course:"Full Stack Development"
    },
    {
    id:8,
    Name:"Sangtamil",
    Rollno:"08",
    Course:"Full Stack Development"
    },
    {
    id:9,
    Name:"Deepesh",
    Rollno:"09",
    Course:"Full Stack Development"
    },
    {
    id:10,
    Name:"Uma",
    Rollno:"10",
    Course:"Full Stack Development"
    },
    {
    id:11,
    Name:"Abi",
    Rollno:"11",
    Course:"Full Stack Development"
    },
    {
    id:12,
    Name:"Kavi",
    Rollno:"12",
    Course:"Full Stack Development"
    },
   ])
    return(
      <Studentsdetails.Provider value={{studentdet,setstudentdet,setfavstudent,favstudent}}>
         {data.children}
      </Studentsdetails.Provider>
    )

}
export default Studentsprovider

export {Studentsdetails}