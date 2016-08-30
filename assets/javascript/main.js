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


function displayFooter() {

	var mq = window.matchMedia( "(min-width: 700px)" );
	var footer = $('#footer');
	var footerSM = $('#footer-small');

	if (mq.matches) {
  		// window width is at least 700px
  		$("#footer").show();
	} else {
  	// window width is less than 500px
  		$("#footerSM").show();
	}
}
