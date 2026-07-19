import Studentsprovider from "./Studentsprovider";
import Navbar from "./Components/Navbar";
import Favouritecard from "./Components/Favouritecards";
import { Studentsdetails } from "./Studentsprovider";
function Favouritecontainer(){
return(
    <>
        <Navbar bgcolorfavstu={"#FFFFFF"} textfavstu={"#000000"} ></Navbar>

        <Favouritecard ></Favouritecard>
    </>

)
}
export default Favouritecontainer