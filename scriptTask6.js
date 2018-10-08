function isEven(number)
{
	return number%2===0;
}

function factorial(number)
{
	var fact=1;
	for(var i=number; i>1; i--)
	{
		fact*=i;
	}
	return fact;
}

function kebabToSnake(mystring)
{
	var newstring = mystring.replace(/-/g,"_");
	
return newstring;
}