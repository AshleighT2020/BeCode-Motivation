
/*button and comment functions: on oui/non button click, the 'merci' message + comment div should appear. After soumettre button click, comment div should be hidden*/

var messageDisplay = document.querySelector("#message");
var inc=0;

function pollYes() {
	messageDisplay.textContent = "Merci beaucoup!";
	document.getElementById('feedback').style.display = "block";
}

function pollNo() {
	messageDisplay.textContent = "Merci pour votre réponse! ";
	document.getElementById('feedback').style.display = "block";
}

function submitComm()
{
     document.getElementById('feedback').style.display = "none";
     document.feedbackForm.submitComm()
} 