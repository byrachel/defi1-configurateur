/************************/
/*     Variables        */
/************************/

var priceColor = 1000;
var pricePackMuzik = 2000;
var pricePackSport = 3000;
var priceMotorLight = 500;
var priceMotorMedium = 650;
var priceMotorPremium = 800;

var total = 0;

/************************/
/*     Fonction         */
/************************/


function addOption(choiceAction,priceColor,pricePackMuzik,pricePackSport,priceMotorLight,priceMotorMedium,priceMotorPremium,total) {

	var choiceOption = prompt("Quelle option souhaitez-vous ajouter ou supprimer : couleur ? pack ? moteur ?");

	switch(choiceOption) {
		case "couleur" : 
			if(choiceAction == "ajouter") {
				total += priceColor;
				alert("Option couleur ajoutée - Votre facture est de :" + total);
			}
			else if(choiceAction == "supprimer") {
				total -= priceColor;
				alert("Option couleur supprimée - Votre facture est de :" + total);
			}
		break;
		case "pack" :
			total = choiceOptionPack(pricePackMuzik,pricePackSport,choiceOption,choiceAction,total);
		break;
		case "moteur" :
			total = choiceOptionMotor(priceMotorLight,priceMotorMedium,priceMotorPremium,choiceAction,choiceOption,total);
		break;
		default:
		alert("Merci de choisir au moins une option.");
		break;
	}
	return total;
}

/***** fonction : choix du pack *****/
function choiceOptionPack(pricePackMuzik,pricePackSport,choiceOption,choiceAction,total) {
	var choiceOptionPack = prompt("Souhaitez-vous le pack muZik ou le pack sport ?");
		if((choiceAction == "ajouter") && (choiceOptionPack == "muZik")) {
			total += pricePackMuzik;
			alert("Option Pack muZik ajoutée - Votre facture est de :" + total);
		}
		else if((choiceAction == "supprimer") && (choiceOptionPack == "muZik")) {
			total -= pricePackMuzik;
			alert("Option Pack muZik supprimée - Votre facture est de :" + total);
		}
		else if((choiceAction == "ajouter") && (choiceOptionPack == "sport")) {
			total += pricePackSport;
			alert("Option Pack Sport ajoutée - Votre facture est de :" + total);
		}
		else if((choiceAction == "supprimer") && (choiceOptionPack == "sport")) {
			total -= pricePackSport;
			alert("Option Pack sport supprimée - Votre facture est de :" + total);
		}
		else {
			alert("Veuillez choisir votre pack : sport ou muZik.");
		}
	return total;
}

/***** fonction : choix du moteur *****/

function choiceOptionMotor(priceMotorLight,priceMotorMedium,priceMotorPremium,choiceAction,choiceOption,total) {
	var choiceOptionMotor = prompt("Souhaitez-vous un moteur : 120, 140 ou 220 ?");
		if((choiceAction == "ajouter") && (choiceOptionMotor == "120")) {
			total += priceMotorLight;
			alert("Option Moteur 120 chevaux ajoutée. Votre facture est de :" + total);
		}
		else if((choiceAction == "supprimer") && (choiceOptionMotor == "120")) {
			total -= priceMotorLight;
			alert("Option Moteur 120 chevaux supprimée. Votre facture est de :" + total);
		}
		if((choiceAction == "ajouter") && (choiceOptionMotor == "140")) {
			total += priceMotorMedium;
			alert("Option Moteur 140 chevaux ajoutée. Votre facture est de :" + total);
		}
		else if((choiceAction == "supprimer") && (choiceOptionMotor == "140")) {
			total -= priceMotorMedium;
			alert("Option Moteur 140 chevaux supprimée. Votre facture est de :" + total);
		}if((choiceAction == "ajouter") && (choiceOptionMotor == "220")) {
			total += priceMotorPremium;
			alert("Option Moteur 220 chevaux ajoutée. Votre facture est de :" + total);
		}
		else if((choiceAction == "supprimer") && (choiceOptionMotor == "220")) {
			total -= priceMotorPremium;
			alert("Option Moteur 220 chevaux supprimée. Votre facture est de :" + total);
		}
		else {
			alert("Veuillez choisir entre les options : 120 / 140 / 220.");
		}
	return total;
}

/************************/
/*       Actions        */
/************************/

do {
	var choiceAction = prompt("Souhaitez-vous ajouter ? supprimer une option ? ou valider votre sélection ?");

	switch(choiceAction) {
		case "ajouter" :
			total = addOption(choiceAction,priceColor,pricePackMuzik,pricePackSport,priceMotorLight,priceMotorMedium,priceMotorPremium,total);
			break;
		case "supprimer" :
		total = addOption(choiceAction,priceColor,pricePackMuzik,pricePackSport,priceMotorLight,priceMotorMedium,priceMotorPremium,total);
		break;

/***** Afficher le montant total à payer et sortir de la boucle *****/

		case "valider" :
			alert("Montant à payer : " + total + ". Merci de votre commande.");
			break;

/***** Si le visiteur saisi une mauvaise action *****/

		default:
			alert("Veuillez choisir AJOUTER, SUPPRIMER ou VALIDER.");
			break;
	}
}
while(choiceAction != "valider");