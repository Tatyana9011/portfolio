import scrollTopII from "./scrollTopII.js";


const activeLink = (str)=>{

    const sidebar = document.querySelector('.sidebar');
    const menulist = sidebar.querySelectorAll("li");
    scrollTopII()
    //активируем линку и снимаем активацию с других
    menulist.forEach((item, i)=>{

        let textLink = item.querySelector(".text").textContent;
        item.classList.remove("active");
        if(textLink&&textLink === str){
            item.classList.add('active');
        
        } else if(item.closest('sidebar__logo')){
            item[1].classList.add('active')
        
        }
    })

}

export default activeLink;