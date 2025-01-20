const animateGoroscop =()=>{
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
