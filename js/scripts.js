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


$(document).ready(function(){
  // Função de abrir o sropdown do menu principal
    $("#drop-down").click(function(){
      $("#subMenuId").toggle();
    });

    $("#menu-mobile").click(function(){
      $(".hidde-menu").toggle();
    });

    // Funçãos do menu principal responsívos
    $("#drop-down-mobile").click(function(){
      $("#subMenuId-mobile").toggle();
    });

    // Função de abrir o sropdown do menu no rodapé
    $("#drop-down-footer").click(function(){
      $("#subMenuId-footer").toggle();
    });

    // Funçãos do menu no rodapé responsívos
});