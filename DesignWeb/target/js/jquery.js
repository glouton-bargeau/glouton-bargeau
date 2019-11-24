/*
$("img").click(function(){
    var nom = $("#p1").html();
alert(nom);
});
*/

/*==========================================*/
var p=1;

$("#p1").hide();
$("img").click(function()
{
    if (p===1){
            $("#p1").show();
            p=2
    }
    else if (p===2){
        $("#p1").hide();
        p=1;
    }
});
