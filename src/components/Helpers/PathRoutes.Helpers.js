// los Helpers son porciones de codigo, donde definimos cierto codigo, o mas bien variables" para luego reutilizarlo en el resto de nuestra aplicaciones, asi cuando tenemos que cambiar algo, en vez de cambiar ese algo en todas las carpetas, unicamente la cambiamos en el helper y eso se exparce a todas las partes donde es usado


const PATHROUTES = {
    FORM:"/",
    HOME:"/home",
    ABOUT:"/about",
    DETAIL:"/detail/:id",

}

export default PATHROUTES;