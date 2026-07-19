import { Link } from "react-router-dom"


function Navbar(props){
    return(
         <div className='text-center bg-[#4a689c] text-4xl flex justify-around font-extrabold text-white flex-wrap '>
        <Link to={"/"} className="p-4 hover:bg-white  hover:text-black" style={{background:props.bgcolorstulist ,color:props.textstulist}} >List of Student</Link> 
        <Link to={"/FavouriteStudents"} className="p-4  hover:bg-white hover:text-black" style={{background:props.bgcolorfavstu ,color:props.textfavstu}} >Favourite Students</Link>
        </div>
    )
}
export default Navbar