import loader1 from "./loader1.js";
import loader2 from "./loader2.js";
import loader3 from "./loader3.js";
import loader4 from "./loader4.js";
import loader5 from "./loader5.js";
import loader6 from "./loader6.js";
import loader7 from "./loader7.js";
import loader8 from "./loader8.js";
const loaderPage =()=>{
    const contentLouder = document.querySelector(".content_louder");
    const loaderFirst =  loader1();
    const loaderSecond = loader2();
    const loaderThird = loader3();
    const loaderFourth = loader4();
    const loaderFifth = loader5();
    const loaderSixth = loader6();
    const loaderSeventh = loader7();
    const loaderEighth = loader8();

    const stratusMassage = `
    <section>${loaderFirst.outerHTML}</section>
    <section>${loaderSecond.outerHTML}</section> 
    <section>${loaderThird.outerHTML}</section>
    <section>${loaderFourth.outerHTML}</section>
    <section>${loaderFifth.outerHTML}</section>
    <section>${loaderSixth.outerHTML}</section>
     <section>${loaderSeventh.outerHTML}</section>
      <section>${loaderEighth.outerHTML}</section> 
    `;
    contentLouder.innerHTML = stratusMassage;
}
export default loaderPage;