import styles from './Detail.module.css'
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";



const Detail =() => {

   const {id} = useParams();
   const [character,setCharacter] = useState({})

   useEffect(() => {
   axios(`http://localhost:3001/character/${id}`).then(
      ({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);

   

    return ( 
        <div className={styles.detailcontainer} >

         {character ? (
               <div className={styles.card}>
                  <div className={styles.headercard}>
                     <img className={styles.cardimg} src={character.image}/>
                     <Link to={`/home`}>
                     <h2 className= {styles.cardname}> {character.name}</h2>
                     </Link>
                     </div>


                     

                        <div className={styles.cardinfo}>
                     <h2>{character.status}</h2>
                     <h2>{character.gender}</h2>
                     <h2>{character.species}</h2>

                     <Link to={`/home`}>
                     <button className={styles.detailbtn}>GoBack</button> 
                     </Link>
                     
                  
              
              
                     
                     </div>
                     
               </div>
         ):
         (<h1> Loading data</h1>)
         }


            
            
        </div>
     );
}

export default Detail;


            //   key={char.id}
            //   id={char.id}
            //   name={char.name}
            //   status={char.status}
            //   species={char.species}
            //   gender={char.gender}
            //   origin={char.origin.name}
            //   image={char.image}
            //   onClose={onClose}