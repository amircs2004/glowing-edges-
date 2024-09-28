const containerEL =document.querySelector(".container")
let cards = document.querySelectorAll(".card")

cards.forEach( card=>{
    card.onmousemove = function(e){
        let x =e.pageX -card.offsetLeft
        let y = e.pageY -card.offsetTop
        console.log(x);
        console.log(y);
        
       card.style.setProperty('--x' , x + 'px')
       card.style.setProperty('--y' , y + 'px')
    }

})