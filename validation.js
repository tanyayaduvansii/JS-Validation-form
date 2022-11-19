function validation(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    
     var user_check =/^[A-Za-z. ]{3,30}$/ ;
     var password_check =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}/ ;
     var email_check = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/ ;
     var mobile_check= /^[789][0-9]{9}$/ ;

     







     
     if(user_check.test(username)){
         document.getElementById('usererror').innerHTML =" ";
     }else{
        document.getElementById('usererror').innerHTML ="** username is invalid";
        return false;
     }
     if(password_check.test(password)){
        document.getElementById('passworderror').innerHTML =" ";
    }else{
       document.getElementById('passworderror').innerHTML ="** password is invalid";
       return false;
    }
    if(password2.match(password)){
        document.getElementById('cpassworderror').innerHTML =" ";
    }else{
       document.getElementById('cpassworderror').innerHTML ="** Password not match";
       return false;
    }

    if(email_check.test(email)){
        document.getElementById('emailerror').innerHTML =" ";
    }else{
       document.getElementById('emailerror').innerHTML ="** email is invalid";
       return false;
    }
    if(mobile_check.test(number)){
        document.getElementById('mobileerror').innerHTML =" ";
    }else{
       document.getElementById('mobileerror').innerHTML ="** Mobile NUmber is invalid";
       return false;
    }
   
      

}
      