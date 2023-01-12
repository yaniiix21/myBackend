const title = document.getElementById('title')
const btn =  document.getElementById('btn')
const main = document.getElementById('main')

const color = [ 'url(bg1.jpg)', 'url(bg2.jpg)', 'url(bg3.jpg)']

function task() {
    const randomColor = Math.floor(Math.random() * color.length);
    main.style.backgroundImage = color[randomColor];
}

 btn.addEventListener('click', task)
 
