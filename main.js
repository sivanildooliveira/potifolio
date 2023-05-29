var btnmenu = document.getElementById('btnMenu');
var header = document.querySelector('header');

btnmenu.addEventListener('click', ()=>{
    header.classList.toggle('active')
})

header.querySelectorAll('a').forEach((lk)=>{
    lk.addEventListener('click', ()=>{
        header.classList.toggle('active')
    })
})