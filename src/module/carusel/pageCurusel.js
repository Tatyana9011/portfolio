import animetidCarusel from "./animetidCarusel.js";
import cardFocus from "./cardFocus.js";
import imgGorisont from '../../assets/images/goresont.webp';
import imgGorisontMiddle from '../../assets/images/goresont_middle.webp';
import imgGorisontFront from '../../assets/images/goresont_front.webp';
import imgSunset from '../../assets/images/sunset.webp';
import swiperControl from "./swipperControl.js";

const pageCurusel=()=>{

  const layersLoyerBase = document.querySelector('.layers__base');
  layersLoyerBase.style.backgroundImage = `url(${imgGorisont})`;
  const layersMiddle = document.querySelector('.layers__middle');
  layersMiddle.style.backgroundImage = `url(${imgGorisontMiddle})`;
  const layersFront = document.querySelector('.layers__front');
  layersFront.style.backgroundImage = `url(${imgGorisontFront})`;
  const splitCards = document.querySelector('.split_cards');
  splitCards.style.backgroundImage = `url(${imgSunset})`;

    animetidCarusel();
    cardFocus();
    swiperControl()

function setUrlBacground(selector,src) { 
  
 const elem = document.querySelector(`${selector}`);
 const image = require(`${src}`);
 elem.style.backgroundImage = `url(${image})`

}


}
export default pageCurusel;




