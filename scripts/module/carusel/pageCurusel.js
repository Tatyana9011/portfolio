import animetidCarusel from "./animetidCarusel.js";
import cardFocus from "./cardFocus.js";

const pageCurusel=()=>{
  console.log('pageCurusel: ');
  animetidCarusel()
    cardFocus()
//регестрируем плагин gsap
gsap.registerPlugin(ScrollTrigger);



//ScrollSmoother.create({
	//wrapper: '.wrapper',
	//content: '.content',
//})

}
export default pageCurusel;




