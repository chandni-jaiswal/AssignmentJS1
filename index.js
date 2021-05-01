
        var iconPopUp = document.querySelector(".btn")
        iconPopUp.addEventListener("click",()=>{
        document.querySelector("#formAddName").style.visibility="visible";
        document.querySelector(".container").style.filter="blur(6px)";
    });
    var list = document.getElementById('demo');
    var entry = document.getElementById('formAddName');
    entry.onsubmit = function(evt) {
    evt.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstName));
    list.appendChild(entry);
  } 
  var disappear = document.querySelector(".addBtn")
  disappear.addEventListener("click",()=>{
        document.querySelector("#formAddName").style.visibility="hidden";
  });  
  var disappear1 = document.querySelector(".closeBtn")
  disappear1.addEventListener("click",()=>{
        document.querySelector("#formAddName").style.visibility="hidden";
        document.querySelector(".container").style.visibility="visible";
  });