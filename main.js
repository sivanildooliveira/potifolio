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

document.addEventListener('DOMContentLoaded', function() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');
  
    for (let link of smoothScrollLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  
