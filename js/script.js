$(function() {
  $(".clickable").click(function() {
    $(this).toggleClass("buttonPress");
  });
});
function togglePadding(){
  $("#content").toggleClass("enablePadding");
}
function toggleLineHeight(){
  $("#content").toggleClass("enableLineHeight");
}
function toggleFonts(){
  $("#content h1").toggleClass("enableFontsH1");
  $("#content p").toggleClass("enableFontsP");
}
function toggleSizing(){
  $("#content h1").toggleClass("enableSizeH1");
  $("#content p").toggleClass("enableSizeP");
}
function toggleA(){
  $("#content p a").toggleClass("enableA");
}