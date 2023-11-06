import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";

import Cards from "./components/Cards/Cards";
import axios from "axios";
import About from "./components/About/About";
import {  Route, Routes } from "react-router-dom";

import Detail from "./components/Detail/Detail"
import PATHROUTES from "./components/Helpers/PathRoutes.Helpers";
import Form from './components/Form/Form'




function App() {

  
   const [characters,setCharacters] = useState([]);

//Podemos "modularizar" las funciones

// 1 Enviamos onSearch
// 2 
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
 

 
 const onClose = (id) =>{
   setCharacters(
   characters.filter ((char)=>{
      return char.id !== Number(id);
   }))  //filter nos devuelve un array filtrado sacando el item que especifiquemos < Form/>
 }


 
 return (
    <>
    <Nav  onSearch={onSearch}/>
    
    <Routes>
    <Route path={PATHROUTES.FORM}        element={<Form/>}/>
      <Route path={PATHROUTES.ABOUT}        element={<About/>}/>
      <Route path={PATHROUTES.DETAIL}   element={<Detail/>} />
      <Route path={PATHROUTES.HOME}         element={<Cards characters={characters} onClose={onClose}/>} />
    </Routes>

    </>
  );
  }

export default App;
