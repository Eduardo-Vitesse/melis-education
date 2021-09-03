const menuResp = document.querySelector(".hidde-menu")

window.addEventListener('resize', () => {
  var windowWidth = window.innerWidth
  if(windowWidth > 800) {
    menuResp.style.display = 'none'
  }
})

$(document).ready(function(){
    $("#drop-down").click(function(){
      $("#subMenuId").toggle();
    });
});

$(document).ready(function(){
  $("#menu-mobile").click(function(){
    $(".hidde-menu").toggle();
  });
});

$(document).ready(function(){
  $("#drop-down-mobile").click(function(){
    $("#subMenuId-mobile").toggle();
  });
});