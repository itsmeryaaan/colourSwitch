$(document).ready(function(){

$('#defaultTheme').click(function() {
    $('h1').addClass("h1-default")
    $('p').addClass("p-default")
    $('body').addClass("body-default")
    $('.navbar').addClass("nav-default")
})
    
    
$('#monoTheme').click(function() {
    $('body').addClass("body-mono");
    $('.navbar').addClass("nav-mono");
    $('h1').addClass("h1-mono");
})

});s