const url='http://localhost:3000/adminData';

$(document).ready(function(){
    $("#btn1").click(function (){
        const data = {
            name: validate(document.getElementById("name").value),
            password: validate(document.getElementById("password").value),
            email: validate(document.getElementById("email").value)
        };
        ajaxPost(url, data);
    });
});

function ajaxPost(url, data){
    $.ajax({
        url: url,
        method: "POST",
        data: data,
        success: function(data){
            console.log('on success : '+data);
        },
        error: function(e){
            console.log("login error, status: "+e.status +" message : "+e.responseText);
        }
    })
}

function validate(data) {
 if(data ==="" ){
     alert("Form must be filled out");
   }
 return data;
}