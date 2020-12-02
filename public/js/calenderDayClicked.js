const url='http://localhost:3000/adminData';

$(document).ready(function() {
    $(".style_prevu_kit").click(function(event) {
        //alert(event.target.id);
        if(event.target.id !== ""){
            let dayID = event.target.id;

            // send request
            const data = {
                dayID: dayID
            };
            ajaxPost(url, data);
        }
    });

    $(".v16_102").click(function(event) {
        //alert(event.target.innerText);
        if( event.target.innerText !== ""){
            let dayID = "day" + event.target.innerText;
            // send request
            const data = {
                dayID: dayID
            };
            ajaxPost(url, data);
        }

    });

    function ajaxPost(url, data){
        $.ajax({
            url: url,
            //contentType: "image/jpeg",
            method: "POST",
            data: data,
            success: function(data){
                //console.log('on success : '+ data);
                $('.modal-body').html('<img src="data:image/png;base64,'+data+'" />');
                $('#empModal').modal('show');
                console.log($('#empModal'));

            },
            error: function(e){
                console.log("login error, status: "+e.status +" message : "+e.responseText);
                alert("Nanana, noch nicht heute!")

            }
        })
    }

});



