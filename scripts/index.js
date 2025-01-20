import  activeLink from "./module/activeLink.js";
import { getDataStorage } from "./module/localStorage.js";
import getPage from "./module/getPage.js";
import closeModal from "./module/modal/closeModal.js";
import changeActiveSidebar from "./changeActiveSidebar.js";

document.addEventListener("DOMContentLoaded",()=>{

//try{
    const modal = document.querySelector(".modal");
    const sidebar=document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".menuToggle");

    let hash=null;

    const dataPage = getDataStorage('page')? getDataStorage('page'):'Home';
    if(dataPage){
        getPage(dataPage);//откриваем необходимую страницу в соответствии с текстом на линке
        activeLink(dataPage); //активуємо лінку в меню
    }
  
    document.addEventListener("click", (event) => {
        
      const target = event.target;
      let targetLink = target.closest('a');
      let pageHash

      if(targetLink)pageHash = targetLink.querySelector('.text').textContent;

        if(!target.closest('.sidebar')&!target.closest('.menuToggle')){
          changeActiveSidebar(false);
        }
        if(dataPage!=='Home'&&dataPage!=='Hid sidebar'){
          menuToggle.style.display = 'none'; 
        }
        if(pageHash==='Home'){
          menuToggle.style.display = 'flex';
        }
        if(pageHash==='Hid sidebar'){

          changeActiveSidebar(true)
       
        }
      })

    window.addEventListener('hashchange', () => {   //событие смены хеша //перешли на другую страницу
        hash = location.hash.substring(1);   //берем этот хеш и обрезаем решотку
        if(hash){
          getPage(hash); //откриваем необходимую страницу в соответствии с текстом хеша
          activeLink(hash);//активуємо лінку в меню
           console.log('hashchange: ', hash);
          if(modal.style.display = 'block'){
              closeModal()
          }
        }
    })

    window.addEventListener('scroll',function (e){
      document.body.style.cssText += `--scrollTopY:${this.scrollY}px`;   //--scrollTop создаем эту переменную и ее видно во всех цсс файлах
    
    })
    
     //откріваем и закріваем сайтбар меню
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

//}catch (err){
  //  console.log('err: ', err);
  //  let page = document.querySelector(`${hash.toLowerCase()}`);
   // addStatus(page,`Щось пішло не так, спробуйте загрузити інше фото <br>${err}`, 3000, 'rgb(255, 100, 10)');

//}













})











