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


const salvarMensage = ()=>{
  const form = document.getElementById('formMensage');

  let nome = form.querySelector('#nome')
  let email = form.querySelector('#email')
  let telefone = form.querySelector('#telefone')
  let titulo = form.querySelector('#titulo')
  let mensagem = form.querySelector('#mensagem')
  const id = new Date()
  const data = {
    'nome': nome,
    'email': email,
    'telefone': telefone,
    'titulo': titulo,
    'mensagem': mensagem
  };

  alert('a mensagem não foi enviada')

  /*fetch('https://mybase-c9c2d-default-rtdb.asia-southeast1.firebasedatabase.app/mensagens/.json', {
    method: 'POST',
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Erro na requisição POST');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });*/
  
}