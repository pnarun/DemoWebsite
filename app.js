function subform()
{
    if($("#first").val()=='' || $("#last").val()=='')
        {alert ("first and last name required");}
    
    else{
        if($("#e2").val()=='')
            {alert("kindley put your mail id");}
        else{
            if($("#pass1").val()=='' || $("#pass2").val()=='')
                {alert("password area required");}
            else{
                if($("#pass1").val()!=$("#pass2").val())
            { alert("password doesn't match");}
                else{
                localStorage.setItem("email",$("#e2").val());
                localStorage.setItem("password",$("#pass1").val());
                alert("signed successfully");
                window.location.href="main.html";
            }
                
            }
        }
    }
}

function logform()
{
    if($("#e1").val()=='')
        {alert("enter email id");}
    else{
        if($("#e1").val()==localStorage.getItem("email"))
            {
                if($("#pass").val()=='')
                    {alert ("enter password");}
                else{
                    if($("#pass").val()==localStorage.getItem("password"))
                        {
                            alert("sign in successfully");
                            
                            window.location.href="main1.html";  
                        }
                    else{
                        alert("wrong password");
                    }
                }
            }
                else{
                    alert("Invalid Id");
                }
    }
}