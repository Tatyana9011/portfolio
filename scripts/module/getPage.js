import canvas from "./canvas/canvas.js";
import homePage from "./home/homePage.js";
import { saveDataJSON, removeDataStorage,getDataStorage } from "./localStorage.js";
import gamePage from "./game/gamePage.js";
import loaderPage from "./loader/loaderPage.js";
import settingsPage from "./settingsPage/settingsPage.js";
import orderPage from "./orderPage/orderPage.js";
import pageCurusel from "./carusel/pageCurusel.js";

const getPage = (str='Home')=>{ //откриваем необходимую страницу в соответствии с текстом на линке
    console.log('getPage: ', str);
  
    const ollPages = document.querySelectorAll(".page"),
          canvasImg = document.querySelector(" .imageCanvas"),
          formPage = document.querySelector(".settings"),
          getHomePage = document.querySelector(".home"),
          order = document.querySelector(".order"),
          analytics = document.querySelector(".analytics"),
          game = document.querySelector(".game"),
          curusel = document.querySelector(".curusel"),
          getPage = getDataStorage('page');

        ollPages.forEach((item)=>{
            if(item.getAttribute('style')!=="display:none"){
                item.setAttribute('style',"display:none");
             }  
        })  

        if(getPage!=='Home'){
            removeDataStorage('signs');
            removeDataStorage('signChange');
            removeDataStorage('sumisnisty');
        }

        if(str==="Image"){
            canvasImg.setAttribute('style', 'displey:block');
            canvas()
        }else if(str==="Settings"){
            formPage.setAttribute('style', 'displey:block');
            settingsPage();
            
        }else if(str==="Home"){
            getHomePage.setAttribute('style', 'displey:flex');
            homePage()
        }else if(str==="Analytics"){
            analytics.setAttribute('style', 'displey:block');
            loaderPage()
        }else if(str==="Order"){
            order.setAttribute('style', 'displey:block');
            orderPage()
        }else if(str==="Game"){
            game.setAttribute('style', 'displey:flex');
            gamePage()
        }else if(str==="Carusel"){
            curusel.setAttribute('style', 'displey:flex');
            pageCurusel();
        }
        saveDataJSON("page",str)
}

export default  getPage;




