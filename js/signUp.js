const Http = new XMLHttpRequest();
const url='https://localhost:3000/adminData';

$(document).ready(function(){
    $('#btn').click(function () {
    });
});


function validate(data) {
    if(data ==="" ){
        alert("Form must be filled out");
    }
}
/*
function (){
    const data= {
        name: validate(document.getElementsByName("name").value),
        password: validate(document.getElementsByName("password").value),
        email: validate(document.getElementsByName("email").value)
    };
    $.post(url,data,function(data,status){
        console.log('${data}')
    })
// */