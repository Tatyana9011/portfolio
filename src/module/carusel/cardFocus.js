const cardFocus=()=>{

    const cards = document.querySelectorAll(".card");
    Splitting()

    cards[0].focus()

    cards.forEach(card=>{
        card.addEventListener('click',()=>{

           card.focus();
        
        })
    
    })
}
export default cardFocus;