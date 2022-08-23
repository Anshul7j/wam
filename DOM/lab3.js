function submitform(){
    var username = document.forms["regForm"]["username"];
    var unnext = document.getElementById("un");
    if(username.value.length<3){
        unnext.innerHTML+="username should be greater than 3 characters";
        unnext.style.color = "red"
        return false;
    }
    var mail = document.forms["regForm"]["email"];
    var emnext = document.getElementById("emailID");
    if(mail.value.length==0){
        emnext.innerHTML+="email should not be blank";
        emnext.style.color = "red";
        return false;
    }
    var pass = document.forms["regForm"]["password"];
    var psnext = document.getElementById("pswd");
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){5,7}$/;
    if(pass.value.length<5 || pass.value.length>11){
        psnext.innerHTML+="password must be greater than 5 characters and less than 11";
        psnext.style.color="red";
        return false;
    }
    else if(reg.test(pass.value)){
        psnext.innerHTML+="Password must have atleast one small case letter, one uppercase letter and one number";
        psnext.style.color="red";
        return false;
    }
    var cnfpass = document.forms["regForm"]["Confirm Password"];
    var cnnext = document.getElementById("cnfpswd");
    if(cnfpass.value.length==0){
        cnnext.innerHTML+="Field should not be empty";
        cnnext.style.color="red";
        return false;
    }
    if(pass.value!=cnfpass.value){
        cnnext.innerHTML+="Both passwords should match";
        cnnext.style.color="red";
        return false;
    }
    var adrs = document.forms["regForm"]["Address"];
    var adnext = document.getElementById("address");
    if(adrs.value.length==0){
        adnext.innerHTML+="Address cannot be empty";
        adnext.style.color="red";
        return false;
    }
    var frm = document.forms["regForm"];
    frm.submit();

}