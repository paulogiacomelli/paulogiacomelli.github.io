var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2200);
    displayFooter();
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mypage").style.display = "block";


  $(function(){
  $("#typed").typed({
    // strings: ["Paulo Giacomelli", "a computer science student", "tech enthusiast", "retired college basketball player", "not that cool", "ready to help you though."],
    typeSpeed: 0
  });
});
  
}


