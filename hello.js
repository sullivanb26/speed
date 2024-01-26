/// hello.js
var said = false;
if (said==false) {
  alert("Ran");
}
addEventListener("DOMContentLoaded", (event) => { 
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Run!";
  btn.style.backgroundColor = "purple";
  btn.style.color = "white";
  btn.style.position = "absolute";
  btn.style.left = "10px";
  btn.style.bottom = "10px";
  btn.onclick = function(){
    let run = prompt("Enter text");
    eval(run);
  };
  document.body.appendChild(btn);
});
