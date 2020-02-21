
var messageDisplay = document.querySelector("#message");
var inc=0;

function pollYes() {
	messageDisplay.textContent = "Merci beaucoup!";
	document.getElementById('feedback').style.display = "block";
}

function pollNo() {
	messageDisplay.textContent = "Merci pour votre réponse! ";
	document.getElementById('feedback').style.display = "block";
/*	inc=inc+1;
    messageDisplay.textContent = "Merci pour votre réponse!               " + (inc) + " personnes sont accord."; */

}

function submitComm()
{
     //alert("Votre commentaire a été soumis.")
     document.getElementById('feedback').style.display = "none";
     document.feedbackForm.submitComm()
     // var result = document.getElementById("feedbackForm").value;
} 