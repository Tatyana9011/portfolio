import { setting, music } from "../../stat.js";

const stopGame =()=>{
  console.log('stopGame: ');
    const startBtn = document.querySelectorAll('.start button');
    startBtn.forEach(btn => btn.disabled = false);
    setting.start = false;
    music.pause();
}
  export default stopGame;