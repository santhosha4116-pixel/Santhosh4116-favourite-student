import { useState ,useContext } from "react"
import { Studentsdetails } from "../Studentsprovider"

function Card() {
    const { studentdet, setfavstudent, favstudent } = useContext(Studentsdetails)

    
    function handleadd(item) {

        setfavstudent([...favstudent, item])
    }

    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-5'>
            {studentdet.map(function(item) {

                // THIS is separate - inside map - for button appearance
                const isFavourite = favstudent.find(function(fav) {
                    return fav.id === item.id
                })

                return (
                    <div key={item.id} className='bg-white mx-2 rounded-md p-3.5 flex flex-col gap-1 my-4'>
                        <h1>Name: {item.Name}</h1>
                        <p>Rollno: {item.Rollno}</p>
                        <p>Course: {item.Course}</p>
                        <button
                            onClick={() => { handleadd(item) }}
                            disabled={isFavourite}
                            className={
                                isFavourite
                                ? 'border-2 border-gray-300 px-2 py-1 mx-4 my-2 rounded-[50px] cursor-not-allowed text-gray-400'
                                : 'border-2 border-green-500 px-2 py-1 mx-4 my-2 rounded-[50px] hover:bg-green-500 cursor-pointer'
                            }
                        >
                            {isFavourite ? "Added" : "Add Favourites"}
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Card
