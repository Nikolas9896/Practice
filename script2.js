var userNumber = prompt("Guess a number");
var hiddenNumber = "10";
if (userNumber === hiddenNumber) {
	alert("You WON!!! The number is trully 10");
	console.log("You WON!!! The number is trully 10");
}
else if (userNumber > hiddenNumber) {
	alert("Too high. Try again");
	console.log("Too high. Try again");
}
else	{
	alert("Too low. Try again");
	console.log("Too low. Try again");
}