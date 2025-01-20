const userWidth =(param='album')=>{
    console.log('userWidth param: ', param);
    const hight = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;

    if(param==='album'){
        let w, h;

        if(width>1190){
           w = Math.floor(width*30/100);
           h = Math.floor((width*30/100)*50/100);
           return [w,h];
        }else {
            w = width/1.8;
            h = ((width/2)/1.8);
            return [w,h];
        }

    }
    if(param==='book'){
        let w,h;
        if(width>=1200){
            w = Math.floor(hight*40/100);
            h = Math.floor(hight*50/100);
            return [w,h];
        }else{
           w = ((width/2)/1.25);
           h = width/2;
            return [w,h];
        }
    }
}


export default userWidth;
    
