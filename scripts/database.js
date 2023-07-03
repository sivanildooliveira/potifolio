// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

import { format, formatDistanceToNow } from 'https://cdn.jsdelivr.net/npm/date-fns@2.22.1/esm/index.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzgMHYooZ0yaJU5Xwls0r4yqd2kaNAC2Q",
  authDomain: "potifolio-96013.firebaseapp.com",
  databaseURL: "https://potifolio-96013-default-rtdb.firebaseio.com",
  projectId: "potifolio-96013",
  storageBucket: "potifolio-96013.appspot.com",
  messagingSenderId: "47554019163",
  appId: "1:47554019163:web:43584bf808314b410fe47e",
  measurementId: "G-CS60TV6GZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById('submitForm').addEventListener('click', ()=>{
    let form = document.getElementById('formMensage');
    let fnome = form.querySelector('#nome').value
    let femail = form.querySelector('#email').value
    let ftelefone = form.querySelector('#telefone').value
    let ftitulo = form.querySelector('#titulo').value
    let fmensagem = form.querySelector('#mensagem').value
    let dataHoraAtual = new Date();
    let id = fnome + format(dataHoraAtual, ' dd-MM-yyyy-HH-mm-ss');
    
    set(ref(db, 'mensagens/' + id), {
        nome: fnome,
        email: femail,
        telefone : ftelefone,
        titulo: ftitulo,
        mensagem: fmensagem
    });
    
    alert('mensagem enviada!')
})