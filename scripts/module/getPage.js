import canvas from "./canvas/canvas.js";
import homePage from "./home/homePage.js";
import { saveDataJSON } from "./localStorage.js";
import gamePage from "./game/gamePage.js";


const getPage = (str='Home')=>{ //откриваем необходимую страницу в соответствии с текстом на линке
    console.log('getPage: ', str);
  
    const ollPages = document.querySelectorAll(".page"),
          canvasImg = document.querySelector(" .imageCanvas"),
          formPage = document.querySelector(".settings"),
          getHomePage = document.querySelector(".home"),
          order = document.querySelector(".order"),
          analytics = document.querySelector(".analytics"),
          game = document.querySelector(".game");

        ollPages.forEach((item)=>{
            if(item.getAttribute('style')!=="display:none"){
                item.setAttribute('style',"display:none");
             }  
        })   
        
        if(str==="Image"){
            canvasImg.setAttribute('style', 'displey:block');
            canvas()
        }else if(str==="Settings"){
            formPage.setAttribute('style', 'displey:block');
        }else if(str==="Home"){
            getHomePage.setAttribute('style', 'displey:flex');
            homePage()
        }else if(str==="Analytics"){
            analytics.setAttribute('style', 'displey:block');
        }else if(str==="Order"){
            order.setAttribute('style', 'displey:block');
        }else if(str==="Game"){
            game.setAttribute('style', 'displey:flex');
            gamePage()
        }
        saveDataJSON("page",str)
}

export default  getPage;




