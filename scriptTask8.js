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

function sumArray(array1)
{
	var sum=0;
	for(var i=0; i<array1.length; i++)
	{
		
		sum+=array1[i];
		
	}
	return sum;

	// array1.forEach(function(i,array1){
	// 	sum+=array1[i];
	// });
	// return sum;
}

function max(array1)
{
	var max=array1[0];
	for(var i=1; i<array1.length; i++)
	{
		if(max<array1[i])
		{
			max=array1[i];
		}
		
	}
	return max;
}