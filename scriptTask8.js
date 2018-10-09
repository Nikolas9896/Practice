function printReverse(array1)
{
	for(var i = (array1.length)-1; i>=0; i--)
	{
		console.log(array1[i]);
	}
	console.log("That's all")
}
function isUniform(array1)
{
	var j = true
	for(var i = 1; i<array1.length && j===true; i++)
	{
		if(array1[0]!==array1[i])
		{
			j=false;
		}

	}
	return j;
	console.log(j);
}