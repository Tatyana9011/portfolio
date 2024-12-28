import  activeLink from "./module/activeLink.js";
import { getDataStorage } from "./module/localStorage.js";
import getPage from "./module/getPage.js";
import closeModal from "./module/modal/closeModal.js";


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
  
    sidebar.addEventListener("click", (event) => {
        
      const target = event.target
      let pageHash = target.closest('a').querySelector('.text').textContent
      
        if(pageHash!=='Home'&&pageHash!=='Hid sidebar'){
          menuToggle.style.display = 'none';
        }
        if(pageHash==='Hid sidebar'){
            sidebar.classList.toggle('active');
            const elemA = target.closest('a')
            const elemArow = elemA.querySelector('.one')
            const elemArow2 = elemA.querySelector('.two');
            elemArow.classList.toggle('active');
            elemArow2.classList.toggle('active');
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











