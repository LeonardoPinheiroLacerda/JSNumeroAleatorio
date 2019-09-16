var input = document.getElementById("rando");

input.addEventListener("keyup", function(event) {

	if (event.keyCode === 13) {
		iniciar();
	}
});