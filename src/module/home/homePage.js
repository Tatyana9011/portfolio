//import DataTable from 'datatables.net-dt';
import {exchangeAPI} from '../api/api.js'
import { errorFatch } from '../api/errorFatch.js';
import timeNow from './timeNow.js';
import gorosckop from './phoneGorosckop/gorosckop.js';
import toggleDrag from './toggleDrag.js';
import animateGoroscop from './animateGoroscop.js';


const homePage = ()=>{

    timeNow();
    gorosckop();
    toggleDrag();
    animateGoroscop();
    
    const exchangeData=(data, eror)=>{
        console.log('eror: ', eror);
        const reg = /Закінчився ліміт на запити/;
        data.then((data2)=>{
            if(reg.test(data2.error.ua)){
                console.log( 'Закінчився ліміт на запити');
            }
        })
    }

}             
export default homePage;