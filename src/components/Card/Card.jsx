// Aquí debes utilizar la información que llega por props al componente.
// Puede hacer destructuring de las propidades del objeto props si quieres

import { Link } from 'react-router-dom';
import styles from  './Card.module.css'




 const Card = props => {
   const { name, gender, origin, onClose, image,id } = props;
   return <div className=  {styles.cardcontainer} >
      
       <div className=  {styles.headercard} >
         <div className=  {styles.cardclosebtn} >
           <button className=  {styles.closebtn}  onClick={()=>onClose(id)}>X</button>
         </div>

         <img className=  {styles.cardimg}  src={image} alt="" />
       </div>


       <div className= {styles.infocontainer} >
        <Link  to={`/detail/${id}`}>
        <h2 className= {styles.cardname} > {name} </h2> 
        <button className={styles.detailbtn}>More Details</button> 
        </Link>
         
         <div className={styles.cardinfo}>


         </div>
       </div>

       
     </div>;
 };




export default Card;
