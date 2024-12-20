

import  activeLink from "./module/activeLink.js";
import { getDataStorage } from "./module/localStorage.js";
import getPage from "./module/getPage.js";
import closeModal from "./module/modal/closeModal.js";


document.addEventListener("DOMContentLoaded",()=>{

const menuToggle = document.querySelector(".menuToggle"),
sidebar = document.querySelector(".sidebar"),
modal = document.querySelector(".modal");

let hash=null;

const dataPage = getDataStorage('page')? getDataStorage('page'):'Home';
if(dataPage){

    getPage(dataPage);//откриваем необходимую страницу в соответствии с текстом на линке
    activeLink(dataPage); //активуємо лінку в меню
}
try{
window.addEventListener('hashchange', () => {   //событие смены хеша //перешли на другую страницу
    //hash = location.hash.substring(1);   //берем этот хеш и обрезаем решотку
   // getPage(hash); //откриваем необходимую страницу в соответствии с текстом хеша
   // activeLink(hash);//активуємо лінку в меню
   // if(modal.style.display = 'block'){
     //   closeModal()
    //}
 })
 
    sidebar.addEventListener("click", (event) => {
        console.log('event: ', event.target.closest('a').querySelector('.text').textContent);
        let pageHash = event.target.closest('a').querySelector('.text').textContent
        getPage(pageHash); //откриваем необходимую страницу в соответствии с текстом хеша
        activeLink(pageHash);//активуємо лінку в меню
        if(modal.style.display = 'block'){
            closeModal()
        }
        // getPage(hash); //откриваем необходимую страницу в соответствии с текстом хеша
        //activeLink(hash);//активуємо лінку в меню
    })
    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        sidebar.classList.toggle("active");
    })
    window.addEventListener("unhandledrejection", (event) => {
        console.log('unhandledrejection: ');
        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);// Error: Ошибка! - объект ошибки, которая не была обработана
        console.warn(`UNHANDLED event.promise: ${event.promisen}`);// [object Promise] - промис, который сгенерировал ошибку
        event.preventDefault();
      });
    
      //для настройки прослушивателя событий:
      window.onunhandledrejection = (event) => {
        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
      };

}catch (err){
    console.log('err: ', err);
    let page = document.querySelector(`${hash.toLowerCase()}`);
    addStatus(page,`Щось пішло не так, спробуйте загрузити інше фото <br>${err}`, 3000, 'rgb(255, 100, 10)');

}













})











