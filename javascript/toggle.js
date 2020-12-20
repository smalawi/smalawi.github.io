$(document).ready(function(){ 
    $("a.openpanel").click(function(e){
        e.preventDefault();
        $(".toggle").hide();
        var toShow = $(this).attr('href');
        $(toShow).show();
    });

    $("a.backbutton").click(function(e){
        e.preventDefault();
        var id = $(this).closest('div').attr('id');
        $("#" + id).hide();
        $("#panel1").show();
    });

    $("a.backwritingbutton").click(function(e){
        e.preventDefault();
        var id = $(this).closest('div').attr('id');
        $("#" + id).hide();
        $("#panel7").show();
    });
});