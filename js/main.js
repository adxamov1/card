var elElement = document.querySelector('.element')
var elWrapper = document.querySelector('.wrapper')
var elP = document.querySelector('.p')
var elCard = document.querySelector('.card')
var elCardd = document.querySelector('.cardd')

var mode = true
function fn(){
    if(mode == true){
        elElement.classList.add('light') 
        elElement.classList.remove('dark')  
        elWrapper.style.background = '#fff'
        elCardd.style.background = 'blue'
        elCard.style.background = '#000'
        elP.style.color = '#000'

    }else{
        elElement.classList.add('dark')
        elElement.classList.remove('light')
        elWrapper.style.background = '#000'
        elCardd.style.color = 'red'
        elCard.style.background = '#black'
        elP.style.color = 'white'

    }
    mode=!mode
    console.log(mode);
    console.log(p);
    console.log(card);
    console.log (cardd);
}