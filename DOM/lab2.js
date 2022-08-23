var paraelement = document.createElement("p");
paraelement.setAttribute("id", "par1");
paraelement.innerHTML = "Lorem Ipsum";
paraelement.style.backgroundColor = "aqua";
paraelement.style.width = "50px";
paraelement.style.height = "50px";
document.body.append(paraelement);

var paraelement1 = document.createElement("p");
paraelement1.setAttribute("id", "par2")
paraelement1.innerHTML = "Doir Neque";
paraelement1.style.backgroundColor = "azure";
paraelement1.style.width = "70px";
paraelement1.style.height = "70px";
document.body.append(paraelement1);

function changeOne(){
    var element = document.querySelector("p");
    element.style.fontSize = "25px";
}

function changeAll(){
    var elementarr = document.querySelectorAll("p");
    elementarr.forEach(element => {
        element.style.backgroundColor = "pink";
    });
}
