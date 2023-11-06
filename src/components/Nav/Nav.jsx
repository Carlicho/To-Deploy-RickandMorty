import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'


const Nav = (props) => {
  const {onSearch} = props
  return (
    <header className= {styles.globalheader}>

      
      <div className={ styles.headercontent} >

      <div className={styles.h1links}>

        <h1 className={styles.bannertitle} >Rick and Morty </h1>

  

      <div className={styles.linkscontainer} >
      <Link to="/home" className='nav-link'>Home</Link>
      <Link to="/about" className='nav-link'>About</Link>
      <Link to="/" className='nav-link'>Login</Link>
      </div>

      </div>

      

      
      <SearchBar className={styles.searchBar}  onSearch={onSearch}/>
      
      
      </div>

      
    </header>
  )
}

export default Nav