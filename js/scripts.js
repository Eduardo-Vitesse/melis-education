// Função para ajustar responsividade global dos menus
const menuResp = document.querySelector(".hidde-menu")
const subMenuIdFooter = document.getElementById("subMenuId-footer")

window.addEventListener('resize', () => {
  var windowWidth = window.innerWidth
  if(windowWidth > 800) {
    menuResp.style.display = 'none'
    subMenuIdFooter.style.display = 'none'
  }
})

// Função de abrir o sropdown do menu principal
$(document).ready(function(){
    $("#drop-down").click(function(){
      $("#subMenuId").toggle();
    });
});

// Funçãos do menu principal responsívos
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

// Função de abrir o sropdown do menu no rodapé
$(document).ready(function(){
  $("#drop-down-footer").click(function(){
    $("#subMenuId-footer").toggle();
  });
});

// Funçãos do menu no rodapé responsívos