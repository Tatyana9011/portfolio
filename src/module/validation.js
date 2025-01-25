"use strict";
import addStatus from "./addStatus.js";

export const validationURL=(URL,str)=>{

    const page = document.querySelector(`.${str.toLowerCase()}`);

   
        if(URL&&URL.match(/https?:\/\/[\S.]+(?:jpg|jpeg|png)\b/)){
           
            return true
            
        }else{

            addStatus(page,'Не валідна URL адреса', 5000, 'rgb(255, 100, 10)');
            return false
        }
 
}