const userWidth =(param='album')=>{
    console.log('userWidth param: ', param);
    const hight = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    if(param==='album'){
        let w = 300;
        let h =200;
        if(width>=1200){
           w = Math.floor(width*30/100);
           h = Math.floor((width*30/100)*50/100);
           return [w,h];
        }else {
            w = 300;
            h = 200;
            return [w,h];
        }

    }
    if(param==='book'){
        let w = 200;
        let h =300;
        if(width>=1200){
            w = Math.floor(hight*40/100);
            h = Math.floor(hight*50/100);
            return [w,h];
        }else{
           w = 200;
           h = 300;
            return [w,h];
        }
    }
}


export default userWidth;
    
