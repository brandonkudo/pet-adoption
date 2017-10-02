$(function() {
  $(".adopted-yes, .adopted-no").click(function() {
    $("h4", this).toggleClass("hide");
    $("ul", this).toggleClass("hide");
  });
});
