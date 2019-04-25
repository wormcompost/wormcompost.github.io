$(document).ready(function(){

    $("#buckets").click(function(){
        if ( $("#inside").hasClass("hidden")) {
            $("#inside").removeClass("hidden");
            $("#outside").addClass("hidden");

        } else {
            $("#outside").removeClass("hidden");
            $("#inside").addClass("hidden");
        }
       
   });

});
   