var command;
var arr = Array();
while(command!=="quit")
{
	command = prompt("what would you like to do?");
	
	if(command==="new")
	{
		arr.push(prompt("Plaese, enter a new Todo:"));
		alert("Element is added!");
	}
	else if (command==="list")
	{
		alert(arr);
	}
}
alert("Thanks for used our APP!");