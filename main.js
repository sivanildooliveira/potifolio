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


var potfolios = document.querySelectorAll('#projetos ul li')

potfolios.forEach((el)=>{
  el.addEventListener('click', ()=>{
    potfolios.forEach((rem)=>{rem.classList.remove('active')})
    el.classList.add('active')
  })
})