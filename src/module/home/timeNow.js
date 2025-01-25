

const timeNow =()=>{

    const table = document.querySelector('#tableTime');
    const td = table.querySelectorAll('td');
    let date1 = new Date();
    
   let day= date1.toLocaleDateString('ru')
       td[1].textContent = day;
      
       setInterval(()=>{
          let date = new Date();
          let time = date.toLocaleTimeString()
          return td[2].textContent = time
        }, 1000);

        let week = ['вс','пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
      toDay = new Date().getDay();
      for (let i = 0; i < week.length; i++) {
        if (i === toDay) {
           td[0].innerHTML=`${week[i]}`;
        }
      }
    }


export default timeNow;