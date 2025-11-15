var counter = document.querySelector('#counter')
var inc = document.querySelector('#add')
var dec = document.querySelector('#sub')


var count = 0
inc.addEventListener('click', ()=>{
    let color = changeColor();
    count++;
    console.log(count);
    counter.innerHTML = count;
    counter.style.color = `${color}`;
})
dec.addEventListener('click', ()=>{
    if(count===0){
        return;
    }
    let color = changeColor();
    count--
    if(count!=0){
        counter.style.color = `${color}`;
    }else{
        counter.style.color = 'white';
    }
    console.log(count);
    counter.innerHTML = count;
})

function changeColor() {
    let hex = '6789abcdef';
    let col = '#'
    for(let i =0; i<6; i++){
        col += hex[Math.floor(Math.random()*10)]
    }
    return col;
}