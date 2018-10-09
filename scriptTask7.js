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
		arr.forEach(function(arr, i){
		alert(i+": "+ arr);	
		});
		
	}
	else if(command==="delete")
	{
		var i = prompt("Enter index number for delete element?");
		alert("The "+i +": " +arr[i] + " element is deleted!");
		arr.splice(i,1);
	}
}
alert("Thanks for used our APP!");