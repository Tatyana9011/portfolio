"use strict";
import keydownET from "./canvas/keydownET.js";

const removerEventListener=(type, func)=>{
    console.log('type, func: ' );
    console.log('removerEventListener: ');



        document.removeEventListener(type,func);

        //console.log('document.getEventListener(): ', window.document.getEventListener(document.body));
       // let listeners = window.document.getEventListeners(document.body);
       // Object.keys(listeners).forEach(event => {
       //     console.log(event, listeners[event]);
       // });
   
}
export default removerEventListener;