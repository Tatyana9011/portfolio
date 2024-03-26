const userWidth =(param='album')=>{
    console.log('param: ', param);
    const hight = document.documentElement.clientHeight;
    const width = document.documentElement.clientWidth;
    if(param==='album'){
        console.log('album: ');
        let w = 300;
        let h =200;
        if(width>1200&&hight>500){
           w = Math.floor(width*30/100);
           h = Math.floor((width*30/100)*50/100);
           return [w,h];
        }else if(width<1200){
            w = 300;
            h = 200;
            return [w,h];
        }
    }
    if(param==='book'){
        console.log('book: ');
        let w = 200;
        let h =300;
        if(width>1200&&hight>500){
            w = Math.floor(hight*40/100);
            h = Math.floor(hight*50/100);
            return [w,h];
        }else if(width<1200){
           w = 200;
           h = 300;
            return [w,h];
        }
    }
}


export default userWidth;
    
