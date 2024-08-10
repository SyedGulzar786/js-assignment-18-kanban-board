// var reg = document.getElementById("reg")
// var log = document.getElementById("log")
var using = document.getElementById("user-name")

function getUser(){
    var users = localStorage.getItem("users");
    
    if(users){
        users = JSON.parse(users);
    }else{
        users = [];
    }

    return users;
}
function register(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var users =  getUser();
    var flag = true
    
  
    if(name.value == "" || email.value == "" || password.value == ""){
        flag = true
    }
    else{
    var user = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "canban.html"


}
name.value = "";
email.value = "";
password.value = "";


}
function login(){
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");
    var users =  getUser();
    var isValid = false;
    for(var i = 0;i < users.length;i++){
        if(email.value === users[i].email && password.value === users[i].password){
            isValid = true;
            break
        }
    }
    if(isValid){ 
        alert("user login successfully") 
        window.location.href = "canban.html"
    }else{
        alert("email or password is invalid")
    }
}


var todo = document.getElementById("todo")
var inp = document.getElementById("inprogress")
var don = document.getElementById("done")
var modal = document.getElementById("staticBackdrop") 
var head = document.getElementsByTagName("h1")
var title = document.getElementById("title")
var des = document.getElementById("des")
var cardd = document.getElementById("card");
var flag = true; 
var uHead = "";
var uTitle = "";
var passenger = "";
var log = document.getElementById("logp")
var reg = document.getElementById("regp")
// let element = document.querySelector('input');
// let url = URL.createObjectURL(Element.files[0]);
var save = document.getElementById("save")
// var sourcing = URL.createObjectURL(file.files[0])
// console.log(file)
function submit(){
    head[0].innerHTML = "Todo List";
    save.setAttribute("onclick","card('todo',event)")
}

function inprog(){
    head[0].innerHTML = "In-progress"
    save.setAttribute("onclick","card('inprogress',event)")
}

function doneed(){
    head[0].innerHTML = "Done"
    save.setAttribute("onclick","card('done',event)")
}

function card(type,e){
if(flag){ 
         if(type == "todo"){
        apply(todo)
    }
    
    else if(type == "inprogress"){
        apply(inp)
    }
    
    else if(type == "done"){
        apply(don)
    }

}

else{
    flag = true
    uHead.innerText = title.value;
    uTitle.innerText = des.value;
    closed()
}
}

function apply(typing){
    typing.innerHTML += `<div class="card" id="card" draggable="true" ondragstart="drag(event)">
    <div class="card-content">
    <h2 id="c-h" class="card-title">${title.value}</h2>
    <p id="c-p" class="card-text">${des.value}</p>
    <span>${moment().format('ll')}</span>
    <div class="butt">
    <button class="card-btn" type="button" onclick="edit(event)" id="edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Edit</button> 
    <button class="card-btn" type="button" onclick="del(event)" id="del">Delete</button>
    </div>
    </div>
    </div>` 
closed()
}

function edit(event){
    uHead = event.target.parentNode.parentNode.childNodes[1]
    uTitle = event.target.parentNode.parentNode.childNodes[3]
    title.value = uHead.innerText;
    des.value = uTitle.innerText;
    flag = false
}
function del(e){
    e.target.parentNode.parentNode.parentNode.remove()
}

function closed(){
    flag = true;
    title.value = ""
    des.value = ""
}
function allowDrop(ev) {
    ev.preventDefault();
}
  
  function drag(ev) {
      passenger = ev.target
      console.log(ev.target.parentNodeo)
    //   console.log(ev.target.id)
// ev.dataTransfer.setData("text", ev.target.id);
  }

// yejh dekhleba shahbawa
//   malsa yeha arha hai k drop k function pr ev.target.appenchild lgadiy HAI 
// jis ki wjah se yeh horha hai k yhe kissi bhi element ko target krke usse parent bnarha hai aur phr uske andr yeh child div add krwarha hai 

  
  function drop(ev) {
      ev.preventDefault();

      var landing = ev.target.id;
      if(landing == "todo" || landing == "inprogress" || landing == "done"){
          ev.target.appendChild(passenger);
        }
        else{
            landing = "";
        }
        //   console.log(ev.target.id)
      //   var data = ev.dataTransfer.getData("text");
      // console.log(ev.dataTransfer.getData("text"))
      // console.log(data)
    //   console.log(ev.target.id)
    //   console.log(passenger)
}
    // function loginB(){
    //     //   log.style.display = "block";
    //     //   reg.style.display = "none";
    //     //   console.log("reg.style");
    //   }
    //   function registerB(){
    //         reg.style.display = "block";
    //         log.style.display = "none";
    //   }  


    var arr = getUser()
    var len = getUser().length-1
    
    var uName = arr[len].name;

    using.innerHTML = uName;