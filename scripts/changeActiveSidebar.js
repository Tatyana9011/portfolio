const changeActiveSidebar = (bool)=>{
    console.log('changeActiveSidebar: ');
    const sidbar = document.querySelector('.sidebar'),
    menuToggle = document.querySelector(".menuToggle");
    if(bool){
        const elemArow = sidbar.querySelector('.one')
        const elemArow2 = sidbar.querySelector('.two');
        elemArow.classList.toggle('active');
        elemArow2.classList.toggle('active');
        sidbar.classList.toggle('active');
        menuToggle.classList.toggle('active');
    }else{
        const elemArow = sidbar.querySelector('.one')
        const elemArow2 = sidbar.querySelector('.two');
        elemArow.classList.add('active');
        elemArow2.classList.remove('active');
        sidbar.classList.remove('active');
        menuToggle.classList.remove('active');
    }
    
}
export default changeActiveSidebar;