function getElements(){
    var element = document.getElementsByClassName("mybox");
    console.log(element[0].innerHTML);
    element[0].innerHTML="Hello world!"
    element[0].style.backgroundColor = "green";
    element[0].style.fontSize = "20px";
    console.log(document);
}

function addElement(){
    var element = document.createElement("div");
    element.setAttribute("id","secondDiv");
    var nelement = document.createElement("p");
    nelement.setAttribute("id","mypara");
    element.prepend(nelement);
    element.style.backgroundColor = "blue";
    element.style.width = "150px";
    element.style.height = "200px";
    nelement.innerHTML = "<h1>Lorem Ipsum noir deque</h1>";
    document.body.prepend(element)
}
function removeElement(){
    var element = document.getElementById("secondDiv");
    var paraelement = document.getElementById("mypara");
    element.removeChild(paraelement);
}

function replaceElement(){
    var element = document.getElementById("secondDiv");
    var paraelement = document.querySelectorAll("#mypara");
    var nelement = document.createElement("p");
    nelement.setAttribute("id", "newpara");
    nelement.innerHTML = "<h1>new one</h1>";
    element.replaceChild(nelement, paraelement)
}