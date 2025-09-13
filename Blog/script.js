function changeText() {
   var replaceText = document.    
   getElementsByClassName("mini-text");
   replaceText[0].innerHTML = "Scroll untuk melihat";

   document.getElementId("icon-up").style.display = "none";

   document.getElementId("icon-down").style.display = "block";

}
function dayMode() {
   document.quuerySelector('body').style.backgroundColor = "white";
   document.querySelector('body').style.color = "black";
}
function nightMode() {
   document.querySelector('body').style.backgroundColor = "black";
   document.querySelector('body').style.color = "white";
}
var btnLike= document.querySelector('#green');
var btnDislike= document.querySelector('#red');

btnLike.onclik= likeColor
btnDislike.onclick= dislikeColor

function likeColor() {
   if (btnDislike.classList.contains('red')) {
      btnDislike.classList.remove('red');
   }
   this.classList.toggle('green');
}
function dislikeColor() {
   if (btnLike.classList.contains('green')) {
      btnLike.classList.remove('green');
   }
   this.classList.toggle('red');
}
