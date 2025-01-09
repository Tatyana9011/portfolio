import { setting } from "../../state.js";



const changeLevel = event => {
    
    let target = event.target;
    
    if (target.textContent === 'Легкий') {
        setting.startSpeed = 3;
        setting.traffic = 3;
    }
    if (target.textContent === 'Средний') {
        setting.startSpeed = 6;
        setting.traffic = 3;
    }
    if (target.textContent === 'Сложный') {
        setting.startSpeed = 6;
        setting.traffic = 2;
    }
  };
  export default changeLevel;