import validation from './valitaion';
import { useState, useEffect } from 'react';
import styles from  './Form.module.css'
import { Link } from 'react-router-dom';


import WrongLogin from '../../assets/jerrywrong.png'
import Portal from '../../assets/portal.png'






const Form = () => {
    const [userData, setUserData] = useState({
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState({})
    

    // imagenes cuando ingreso mal
    const [image, setImage] = useState("");

    const handleChange = (e) =>{
        setErrors(validation({...userData,[e.target.name] 
            : e.target.value }))
            setUserData({...userData,[e.target.name] 
                : e.target.value }); //los corchetes nos permiten variar entre email y password
            }





 //REVISAR CODIGO ------!!!!!!!!!!!REVISAR CODIGO !!!!!!!!!!!!!!!!!! REVISAR CODIGO!!!!!!!
  //REVISAR CODIGO ------!!!!!!!!!!!REVISAR CODIGO !!!!!!!!!!!!!!!!!! REVISAR CODIGO!!!!!!!
   //REVISAR CODIGO ------!!!!!!!!!!!REVISAR CODIGO !!!!!!!!!!!!!!!!!! REVISAR CODIGO!!!!!!!

     useEffect(() => { 
        console.log(errors)
         // Cambiar la imagen cuando el correo electrónico está bien ingresado
         if (!errors.length  && userData.email !== "") {
           setImage(Portal);
         } else {
           setImage(WrongLogin);
         }
       }, [errors, userData.email]);

  return (
    <div className={styles.formcontainer}>

 
        <img className={styles.LoginImg} src={image} />

        <form className={styles.form}>
            <div className={styles.email}>
                <label className={styles.label} htmlFor=''>Email</label>
                <input
                className={styles.input}
                name="email"
                type="text"
                value={userData.email}
                onChange={handleChange}
                />
                {
                    errors.e1 ? <p>{errors.e1}</p>:
                    errors.e2 ? <p>{errors.e2}</p>:
                    <p>{errors.e3}</p>
                }
            </div>

            <div className={styles.password}>
                <label className={styles.label} htmlFor=''>Password </label>
                <input
                className={styles.input}
                name='password'
                type='text'
                value={userData.password}
                onChange={handleChange}
                />
                {
                    errors.p1 ? <p>{errors.p1}</p> : 
                    <p>{errors.p2}</p> 
                }
            </div>
            <button className={styles.submit}>
                <Link to={`/home`}>
            Submit
                </Link>
                </button>
        </form>
    </div>
  )
}

export default Form