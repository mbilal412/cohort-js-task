let img = document.querySelector('img')
let love = document.querySelector('i')

img.addEventListener('dblclick', function () {
    love.style.opacity = 1
    love.style.scale = 2

    setTimeout(() => {
        love.style.transform = 'translate(-50%, -300%)';
        love.style.opacity = 0
    }, 300);
    
    setTimeout(() => {
        love.style.scale = 0
        love.style.transform = 'translate(-50%, -50%)';
    }, 800);
})