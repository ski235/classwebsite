function login (){
let username= prompt("username");
let password = prompt("password");
if (username=='Yuna'&& password=='Yuna'){
    window.location.href="yrenzetti.html"
}

if (username=='urenzetti'&&password=='2352323'){
    window.location.href='urenzetti.html'

}
if (username=='papa'&&password=="yuna"){
    window.location.href="wrenzetti.html"
}
else {
    alert("username or password incorrect")
    
}
function logout(){
    window.location.href="index.html";
}
}