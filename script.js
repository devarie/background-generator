var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function random_bg_color1() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor1 = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor1);
  
    document.color1 = bgColor1;
    }

	random_bg_color1();

	function random_bg_color2() {
		var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var bgColor2 = "rgb(" + x + "," + y + "," + z + ")";
	 console.log(bgColor2);
	  
		document.color2 = bgColor2;
		}

		random_bg_color2();

		function setColor1() {
			document.getElementById(color1).value = bgcolor1;
		}

		function setColor2() {
			document.getElementById(color2).value = bgcolor2;
		}