$( "#tabs" ).tabs();
/* --- Mouse Hover Effect for Tabbed Accordion Buttons --- */
$('#tabs-nav li').hover(function(){
    $(this).stop(true, false).animate({ duration: '800', opacity: '.5'});
}, function(){
    $(this).stop(true, false).animate({  opacity: '100' });
});