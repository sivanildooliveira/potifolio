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



/*    document.addEventListener('DOMContentLoaded', function() {
        var links = document.getElementsByClassName('link-secao');
        var headerHeight = 80; // Altura do cabeçalho em pixels

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(event) {
                event.preventDefault();

                var href = this.getAttribute('href');
                var element = document.querySelector(href);
                var offsetTop = element.offsetTop;
                var adjustedOffset = offsetTop - headerHeight;

                window.scrollTo({
                    top: adjustedOffset,
                    behavior: 'smooth'
                });
            });
        }
    });


  */
  
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('header #menuPri a');

  links.forEach((link)=>{
    link.addEventListener('click', function(event) {
      event.preventDefault();

      var href = this.getAttribute('href');
      var offsetTop = document.querySelector(href).offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    })
  })
});