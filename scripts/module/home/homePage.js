//import DataTable from 'datatables.net-dt';
import {exchangeAPI} from '../api/api.js'
import { errorFatch } from '../api/errorFatch.js';
import timeNow from './timeNow.js';


const homePage = ()=>{
    console.log('homePage: ');
    timeNow();
    const exchangeData=(data, eror)=>{
        console.log('eror: ', eror);
        const reg = /Закінчився ліміт на запити/;
        data.then((data2)=>{
            if(reg.test(data2.error.ua)){
                console.log( 'Закінчився ліміт на запити');
            }
        })
    }

    //exchangeAPI()
   // .then(res => exchangeData(res.json(),res.status))
   // .catch(e => error(e));

 

}             
export default homePage;