// ********* printReverse *************

function printReverse(array1)
{
	var last_index=array.length-1;
	for(var i = last_index; i>=0; i--)
	{
		console.log(array1[i]);
	}
}
//********* isUniform function ***********
function isUniform(array1)
{
	var j = true
	var length=array.length;
	for(var i = 1; i<length && j===true; i++)
	{
		if(array1[0]!==array1[i])
		{
			j=false;
		}

	}
	return j;
}

//********* sum function **********
function sumArray(array1)
{
	var sum=0;
	// var length=array.length;
	// for(var i=0; i<length; i++)
	// {
		
	// 	sum+=array1[i];
		
	// }
	// return sum;

	array1.forEach(function(element){
		sum+=element;
	});
	return sum;
}
//******** max function ************
function max(array1)
{
	var max=array1[0];
	var length=array.length;
	for(var i=1; i<length; i++)
	{
		if(max<array1[i])
		{
			max=array1[i];
		}
		
	}
	return max;
}