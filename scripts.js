// WHEN HOVER OVER ANY OF OUR 4 PICTURE DIVS REPLACE PICTURE WITH NEW ONE
$(".picture1").hover( 
function (){
    $(".picture1").css('background-image', "url('img/mush1.png')");
    $(".picture1").css("background-size","cover");
    $(".picture1").css("background-repeat","no-repeat");
},
function (){
    $(".picture1").css('background-image', '')
})

$(".picture2").hover( 
function (){
    $(".picture2").css('background-image', "url('img/mush2.png')");
    $(".picture2").css("background-size","cover");
    $(".picture2").css("background-repeat","no-repeat");
},
function (){
    $(".picture2").css('background-image', '')
})  

$(".picture3").hover( 
function (){
    $(".picture3").css('background-image', "url('img/mush3.png')");
    $(".picture3").css("background-size","cover");
    $(".picture3").css("background-repeat","no-repeat");
},
function (){
    $(".picture3").css('background-image', '')
})    

$(".picture4").hover( 
function (){
    $(".picture4").css('background-image', "url('img/mush4.png')");
    $(".picture4").css("background-size","cover");
    $(".picture4").css("background-repeat","no-repeat");
},
function (){
    $(".picture4").css('background-image', '')
})    
