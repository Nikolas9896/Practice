var userNumber = Number(prompt("Guess a number"));
var secretNumber = 10;
if (userNumber === secretNumber) {
	alert("You WON!!! The number is trully 10");
	console.log("You WON!!! The number is trully 10");
}
else if (userNumber > secretNumber) {
	alert("Too high. Try again");
	console.log("Too high. Try again");
}
else	{
	alert("Too low. Try again");
	console.log("Too low. Try again");
}