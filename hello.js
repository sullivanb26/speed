/// hello.js
addEventListener("DOMContentLoaded", (event) => { 
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Click me!";
  btn.style.backgroundColor = "red";
  btn.style.position = "absolute";
  btn.style.left = "10px";
  btn.style.bottom = "10px;
  btn.onclick = function(){
    let run = prompt("Enter text");
    alert('clicked');
  };
  document.body.appendChild(btn);
  alert("button made!");
});
