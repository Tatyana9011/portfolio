import appendGroup from './SetGroup/appendGroup.js';

const renderSigns =()=>{
    console.log('renderSigns: ');
 
    const contentSigns = document.querySelector('.content_signs');
          contentSigns.innerHTML = `
            <div class = "title">
              <p>Обери свій знак зодіаку</p>
            </div>
            <div class = "signs">
            </div>
            <button class="change">Продовжити</button>
          ` 
      appendGroup()
}
export default renderSigns 