const scrollTopII =(elemScrollContainer)=>{//треба передати селектор контейнеру в якому треба прокрутити скрол до гори

    const scrollContainer = document.querySelector(elemScrollContainer);

      if (scrollContainer) {
        scrollContainer.scrollTo(0,0)
      }else{
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
      
}
export default scrollTopII;
