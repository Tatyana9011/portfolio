import { db } from "../../../stat.js";


const appendGroup =()=>{
    const signs = document.querySelector('.signs');
    const setGroup = [];
 //Створюємо масив масивів // складаемо 4 групи зодіаків для рендорінгу на сторінку
    for (let i=0; i<db.length; i+=3){
     setGroup.push(db.slice(i, i + 3))
    }
    for (let i=0; i<setGroup.length; i++) { // перебираемо кожен масив і родимо елемент для ньго
        const group = document.createElement('div');
        group.classList.add('signs');
        group.classList.add('group');
         for (let j=0; j<setGroup[i].length; j++){
            const newElem = document.createElement('div');
             newElem.classList.add('sign');
             newElem.innerHTML=`
                <div>
                 <img src="./image/${setGroup[i][j].nickName}.png" alt=""/>
                </div>
                <p>${setGroup[i][j].name}</p>`
        signs.append(group);  //рендеримо всі групи на сторінку
        group.append(newElem); // вставляемо знаки в кожну группу
    }
}
}
export default appendGroup;