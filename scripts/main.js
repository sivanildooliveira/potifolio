var btnmenu = document.getElementById('btnMenu');
var header = document.querySelector('header');
const menu = document.getElementById('menuPri');

btnmenu.addEventListener('click', (jh)=>{
    header.classList.toggle('active')
})

menu.querySelectorAll('a').forEach((lk)=>{
    lk.addEventListener('click', ()=>{
        header.classList.toggle('active')
    })
})


var potfolios = document.querySelectorAll('#projetos ul li')

potfolios.forEach((el)=>{
  el.addEventListener('click', ()=>{
    potfolios.forEach((info)=>{info.classList.remove('active')})
    el.classList.add('active')
  })
})


var openVerMaisSobre = (btn)=>{
  const texto = document.getElementById('maisSobre');
  
  
  texto.classList.toggle('active')
  btn.classList.toggle('active')
  
  if(btn.classList.contains('active')){
    btn.innerHTML = '<i class="bi bi-arrow-bar-up"></i><br>ver menos'
  }else{
    btn.innerHTML = 'ver mais<br><i class="bi bi-arrow-bar-down"></i>'
  }
}