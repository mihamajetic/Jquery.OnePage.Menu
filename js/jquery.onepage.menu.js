$(document).ready(function(){
   $(".page").bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
     if (isInView) {
       if (visiblePartY != "top") {
         $("nav ul li a").removeClass("active");
         var a = $(this).data("onepage-id");
         console.log(a);
         $("nav ul li a[data-menu-id=" + a + "]").addClass("active");
       }
     }
   });
 });
