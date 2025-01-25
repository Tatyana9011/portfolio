import { setting, music } from "../../state.js";

const stopGame =()=>{

    const startBtn = document.querySelectorAll('.start button');
    startBtn.forEach(btn => {
      btn.disabled = false;
      btn.style.color="#000000";
      btn.style.cursor = "pointer";
    });
    startBtn.forEach(btn => btn.disabled = false);
    setting.start = false;
    
    music.pause()
}
  export default stopGame;