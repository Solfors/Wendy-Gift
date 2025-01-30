console.log('Hello World!');



document.querySelector('.content').style.height = "100%"


document.querySelector('.content').style.width = '100%';

console.log(window.innerWidth, document.querySelector(".content").style.height)


document.querySelector('footer').style.width = window.innerWidth + 'px';


document.querySelector('.footer-wrapper').style.marginTop;

document.querySelector("header").style.marginTop = window.innerHeight - window.innerHeight - 10 + 'px';



var selector = document.querySelector(".lan-box span");

var togle = false;

selector.addEventListener('click', ()=>{
  if(!togle) {
    document.querySelector(".lan-box .select-lan-wrapper").style.display = 'flex';
    togle = true;
  } else {
    document.querySelector(".lan-box .select-lan-wrapper").style.animation = "closes 0.2s ease-in-out";
    var w8 = setTimeout(()=>{
      document.querySelector(".lan-box .select-lan-wrapper").style.display = 'none';
      document.querySelector(".lan-box .select-lan-wrapper").style.removeProperty("animation");
      clearTimeout(w8);
    }, 200);
    togle = false;
  }
});


document.querySelectorAll(".lan-box .select-lan-wrapper ul li").forEach((lan)=>{
  lan.onclick = function(){
    selector.innerText = this.innerText;
    selector.click();
  }
})


  
var content = window.getComputedStyle(document.querySelector(".login-form"));


var email = document.getElementById('email')

var password = document.getElementById('password')


