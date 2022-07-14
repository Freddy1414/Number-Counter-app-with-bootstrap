var font = document.querySelector('.card-title');
console.log(font);
font.style.color = 'white'

const result=document.querySelector('.results');
const decrease=document.querySelector('#decrease');
const increase=document.querySelector('#increase');
const reset=document.querySelector('#reset');

decrease.addEventListener("click", ()=> {
    result.innerHTML--;
    color();
})
increase.addEventListener("click", ()=> {
    result.innerHTML++;
    color();
})
reset.addEventListener("click", ()=> {
    result.innerHTML=0;
    color();
})

function color () {
    if (result.innerHTML > 0) {
        result.style.color = 'green'
    }
    else if (result.innerHTML < 0) {
        result.style.color = 'red'
    }
    else{
        result.style.color = 'white'
    }
    
}