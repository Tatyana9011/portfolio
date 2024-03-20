const activeLink = (str)=>{
    console.log('activeLink:');

    const menulist = document.querySelectorAll("li");
    //активируем линку и снимаем активацию с других
    menulist.forEach((item)=>{
        let textLink = item.querySelector(".text").textContent;
        item.classList.remove("active");

        if(textLink&&textLink === str){
            item.classList.add('active');
        } else if(item.closest('logo')){
            item[1].classList.add('active')
        }
    })
}

export default activeLink;