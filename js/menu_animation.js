$(document).ready(function(){
    $("#clickMe").one("click", function(){
        $("#tabs").fadeOut();
        $("#stable").removeClass("zIndex2");
        $("clickMe").removeClass("zIndex2");
        $(".fr").addClass("zIndex2");
        $("#clickMe").fadeOut(500);
        $("#clickMe").hide();
        /*RIGHT SIDE*/
        $("#fr7").animate({
          top:"+50%",
          left: "+75%",
          opacity: 1
        },2500);
        $("#fr6").animate({
          top:"40%",
          left: "80%",
          opacity: 1
        },2500);
        $("#fr5").animate({
          top:"30%",
          left: "83%",
          opacity: 1
        },2500);
        $("#fr4").animate({
          top:"20%",
          left:"80%",
          opacity: 1
        },2500);
        $("#fr3").animate({
          top:"10%",
          left:"75%",
          opacity: 1
         },2500);
        /*END OF RIGHT SIDE */
        /*LEFT SIDE*/
        $("#fr1").animate({
          top:"10%",
          left: "+15%",
          opacity: 1
        },2500);
         $("#fr2").animate({
          top: "20%",
          left: "+10%",
          opacity: 1
        },2500);
        $("#fr8").animate({
          top:"30%",
          left: "7.5%",
          opacity: 1
        },2500);
        $("#fr10").animate({
          top:"40%",
          left:"+10%",
          opacity: 1
        },2500);
        $("#fr9").animate({
          top:"50%",
          left:"+15%",
          opacity: 1
        },2500);
        /*END OF LEFT SIDE*/

        /*MAKE THE OTHERS MOVE*/
        $("#1-1").animate({
          top:"20%",
          left:"99   %",
          opacity:1 
        },4000).hide(100);
        $("#1-2").animate({
          top:"40%",
          left:"-4%",
          opacity: 1
        },7500).hide(100);
        $("#1-3").animate({
          top:"40%",
          left:"99%",
          opacity:1
        },5000).hide(100);
        $("#1-4").animate({
          top:"50%",
          left:"99%",
          opacity:1
        },3500).hide(100);
        $("#2-1").animate({
          top:"60%",
          left:"-1%",
          opacity:1 
        },4000).hide(100);
        $("#2-2").animate({
          top:"5%",
          left:"-1%",
          opacity:1 
        },7000).hide(100);
        $("#2-3").animate({
          top:"80%",
          left:"99%",
          opacity:1 
        },6000).hide(100);
        $("#2-4").animate({
          top:"30%",
          left:"-1%",
          opacity:1 
        },4500).hide(100);
        $("#3-1").animate({
          top:"45%",
          left:"99%",
          opacity:1 
        },3000).hide(100);
        $("#3-2").animate({
          top:"20%",
          left:"-1%",
          opacity:1 
        },7500).hide(100);
        $("#3-3").animate({
          top:"10%",
          left:"-1%",
          opacity:1 
        },5000).hide(100);
        $("#3-4").animate({
          top:"75%",
          left:"-1%",
          opacity:1 
        },6000).hide(100);
        $("#4-1").animate({
          top:"80%",
          left:"99%",
          opacity:1 
        },3500).hide(100);
        $("#4-2").animate({
          top:"35%",
          left:"99%",
          opacity:1 
        },4000).hide(100);
        $("#4-3").animate({
          top:"50%",
          left:"99%",
          opacity:1 
        },5000).hide(100);
        $("#4-4").animate({
          top:"70%",
          left:"-1%",
          opacity:1 
        },4000).hide(100);

    });
}); 