import React, { useContext, useState } from 'react'
import { Movie } from '../Movie';

function Form() {
    const {setSearchMovie} = useContext(Movie)
    const [message, setMessage]=useState('')
    const [film, setfilm] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchMovie(film)
        setfilm('')
        setMessage(film)

    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px'}}>
                <div>
                    <h1>
                        Flix
                    </h1>
                    </div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <div style={{backgroundColor:'grey', padding:'5px', borderRadius:'5px'}}>
                            <input style={{outline:'none', backgroundColor:'grey', border:'none'}} placeholder='search for movie' type="text" value={film} onChange={(e) =>setfilm(e.target.value)}  />
                        </div>
                        <input type="submit" value='search' style={{padding:'6px'}} />
                    </div>


            </div>
        </form>
        {message}
    </div>
  )
}

export default Form