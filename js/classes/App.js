import {getPokes, selectPoke} from "../funciones.js"
import {selector} from "../selectores.js";
class ApiPokes{
    constructor(){
        this.initProgram();
    }

    initProgram(){
       getPokes();
       selector.addEventListener('input',selectPoke);
    }

}

export default ApiPokes;