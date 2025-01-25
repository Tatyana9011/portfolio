import backGoroscop from '../../assets/images/goroscopAnimat/Horoscope.png'

const animateGoroscop =()=>{

  const elemBackGoroskop = document.querySelector('.phone_image_goroscop__back');
  elemBackGoroskop.style.backgroundImage = `url(${backGoroscop})`;

  const elemClouds = document.querySelectorAll('.phone_image_goroscop__cloud');
  elemClouds.forEach((cloud,i)=>{

    cloud.style.backgroundImage = `url(${require(`../../assets/images/goroscopAnimat/cloud${i+1}.png`)})`

  })

    //анімація для хмарок
    let elemAll = document.querySelectorAll(".pulse");
    elemAll.forEach((elem,i)=>{
       
        elem.animate( //(kayframe, options)
            {
              transform: [`rotate(${i==1?(-1):1}0deg)`] //keyframe
            },
            {//options
              direction: "alternate", 
              duration: 3000,
              iterations: Infinity//беззупинно в одну сторону і повернення в прчаткову позицію
            }
        );
    })
 
//анімація для зірок
  let elemAllstars = document.querySelectorAll(".phone_image_goroscop__star");
  elemAllstars.forEach((elem,i)=>{

    elem.style.backgroundImage = `url(${require(`../../assets/images/goroscopAnimat/stars${i+1}.png`)})`
    
     elem.animate(
         {
           transform: [`rotate(${i==1?(-1):1}0deg)`]
         },         {
           direction: "alternate",
           duration: 5000,
           iterations: Infinity
         }
     );
 })

 
 
 
 
 
 
 


}
export default animateGoroscop; 
