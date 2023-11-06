import styles from  './Banner.module.css'
import bannerImg from "../../assets/portal2.png"
import { useEffect, useState } from "react"
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ["Web-developer", "React", "NodeJs" , "Express"  ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
      }, delta)

      return()=> { clearInterval(ticker)};
  }, [text])

  const tick = () =>{
    let i  = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if(isDeleting){
      setDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updateText === fullText){
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updateText === '') {
      setLoopNum(loopNum + 1);
      setDelta(500)
    }
  }
  

  return (
    <div className={styles.banner} id='home'>
        <div className={styles.tagline}>
            <span className={styles.tagline}> React proyect of Rick and Morty </span>
            <h1> { ` Carlos Julian Lichowski ` } -<span className={styles.wrap}>  {text} </span></h1>
            <p> this page is one of the proyect i built on the SoyHenry-WebDeveloper bootcamp. If you want to know more
                about my web-developer carreer please click on the button and visit my Portfolio
            </p>
            <button onClick={()=>{console.log('connect')}}> Visit my Portfolio</button> 

            <div className={styles.bannerImgContainer} >
                <img className={styles.bannerImg} src={bannerImg} alt="banner image"  />
            </div>
        </div>
    </div>
  )
}

export default Banner


// la idea es que el boton me lleve luego a mi protafolio