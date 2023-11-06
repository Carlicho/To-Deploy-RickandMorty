 import './SearchBar.module.css'
 import { useState } from 'react'

 const SearchBar = (props) => {
    const [id,setId] = useState('')
    

    const handleChange = (e) =>{
      setId (e.target.value);
    };

    const {onSearch} = props

   return <div className="search-container">
       <div className="wrapped-input">
         <input onChange={handleChange} placeholder="id" className="search-input" type="search" value={id} />

               <button className='search-btn' onClick={() =>onSearch(id) /**En React una funcion anonima funciona como prevent default */}>
                  Agregar
               </button>
       </div>
     </div>;
 }

 export default SearchBar



