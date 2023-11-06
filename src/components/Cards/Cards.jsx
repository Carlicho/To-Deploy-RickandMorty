import Card from "../Card/Card";
import styles from  './Cards.module.css'


const Cards = (props) => {

    const {characters,onClose} = props

return (
    <>
    
      <div className= {styles.cardscontainer}>
        
        {characters.map((char)=>{
          return(
            <Card 
              key={char.id}
              id={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              origin={char.origin.name}
              image={char.image}
              onClose={onClose}
            />
            
          )

        })}
      </div>
    </>
  );
};

export default Cards;
