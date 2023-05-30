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

var verMais = (id)=>{
  document.getElementById(id).showModal()
}

/*document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('header #menuPri a');

  links.forEach((link)=>{
    link.addEventListener('click', function(event) {
      event.preventDefault()

      var href = this.getAttribute('href');
      var offsetTop = document.querySelector(href).offsetTop;
    
      window.scrollTo({ top: offsetTop, behavior: 'smooth'})
    })
  })
});*/