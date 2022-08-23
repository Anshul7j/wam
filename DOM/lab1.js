function addForm(){
    var element = document.createElement("div");
    element.setAttribute("class", "myDiv");
    var nelement = document.createElement("form");
    element.appendChild(nelement);
    var paraelement = document.createElement("p");
    paraelement.innerHTML = "Enter Details";
    nelement.appendChild(paraelement);
    var ninput = document.createElement("input");
    ninput.setAttribute("type", "text");
    ninput.setAttribute("name", "Uname");
    nelement.appendChild(ninput);
    var nbtn = document.createElement("button");
    nbtn.innerText = "Submit";
    nelement.appendChild(nbtn);
    document.body.appendChild(element);
}
function submitForm(){
    var errormsg = document.getElementById("errormessage");
    var username = document.forms["loginform"]["username"];
    var emailID = document.forms["loginform"]["mail"];
    if(username.value.length==0 || emailID.value.length==0){
        errormsg.innerHTML="Fields should not be blank";
        return false;
    }
    else{
        var frm = document.forms["loginform"];
        //frm.submit();
        return true
    }
}

function Clearall(){
    var form = document.forms["loginform"];
    form.reset();
}