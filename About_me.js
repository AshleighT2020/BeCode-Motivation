
var messageDisplay = document.querySelector("#message");
var inc=0;

function pollYes() {
	messageDisplay.textContent = "Merci!";
	document.getElementById('feedback').style.display = "block";
}

function pollNo() {
	messageDisplay.textContent = "Merci pour votre réponse! ";
	document.getElementById('feedback').style.display = "block";
/*	inc=inc+1;
    messageDisplay.textContent = "Merci pour votre réponse!               " + (inc) + " personnes sont accord."; */

}

function submit() {
	alert = "Votre commentaire a été soumis."
}