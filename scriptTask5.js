console.log("Numbers between -10 and 19")
for(var i = -10; i<20; i++)
{
	console.log("Number 1: " +i);
}

console.log("Even numbers between 10 and 40")
for(var i = 10; i<=40; i+=2)
{
	console.log("Number 2: " +i);
}

console.log("Odd numbers between 300 and 333")
for(var i = 300+1; i<=333; i+=2)
{
	console.log("Number 3: " +i);
}

console.log("Numbers divisible by 5 AND 3 between 5 and 50")
for(var i = 5; i<=50; i++)
{
	if( (i%5===0) && (i%3===0) )
	console.log("Number 4: " +i);
}