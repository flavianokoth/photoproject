const menu = document.querySelector('.menu')
const closemenu = document.querySelector('.closemenu')
const openmenu = document.querySelector('.openmenu')


openmenu.addEventListener('click',show)
closemenu.addEventListener('click',close)

function show(){
    menu.style.display = 'flex';
    menu.style.top = '0';
}
function close(){
    menu.style.top = '-100%';
}
