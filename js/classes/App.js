import {getPokes} from "../funciones.js"
//import {selector} from "./selectores.js";
class ApiPokes{
    constructor(){
        this.initProgram();
    }

    initProgram(){
       getPokes();
    }

}

export default ApiPokes;