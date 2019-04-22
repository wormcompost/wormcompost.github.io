$(document).ready(function(){

    $("#buckets").mouseover(function(){
        $("#inside").removeClass("hidden");
        $("#outside").addClass("hidden");
   });

   $("#buckets").mouseout(function(){

    $("#outside").removeClass("hidden");
    $("#inside").addClass("hidden");
});
});



   