fetch('https://roserocha.onrender.com/', { mode: 'no-cors' })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console(error)
});

fetch('https://igrejaesperanca.onrender.com/', { mode: 'no-cors' })
.then(response => {
  console.log(response)
})
.catch(error => {
  console(error)
});



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

const lista = document.querySelectorAll('#listPortfolio li');
var listBollons = document.querySelector('#listPortfolio .bollons');

lista.forEach((x,i)=>{
  if(i == 0){
    listBollons.innerHTML = '<div class="bollon active"></div>'
  }else {
    listBollons.innerHTML += '<div class="bollon"></div>'
  }  
});

const bollons = listBollons.querySelectorAll('.bollon');

var cont = 0
var altProject = (op)=>{

  if(op == 1){
    cont = cont+1
  }else{
    cont = cont-1
  }
  
  if(cont+1 > lista.length){
    cont = 0
  } else if(cont < 0){
    cont = lista.length - 1
  }

  lista.forEach((el, index)=>{
    el.classList.remove('active')
    if(index == cont){
      el.classList.add('active')
    }
  })

  bollons.forEach((el, index)=>{
    el.classList.remove('active')
    if(index == cont){
      el.classList.add('active')
    }
  })


}