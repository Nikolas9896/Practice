var number = -10;
console.log("Print all numbers between -10 and 19");
while(number <= 19)
{
	console.log("Numbers 1: "+number);
	number++;
}
number=10;
console.log("Print all even numbers between 10 and 40");
while(number <= 40 )
{
	console.log("Numbers 2: "+number);
	number+=2;
}
number=301;
console.log("Print all odd numbers between 300 and 333");
while(number <= 333 )
{
	console.log("Numbers 3: "+number);
	number+=2;
}
number=5;
console.log("Print all numbers divisible by 5 AND 3 between 50");
while( number <= 50 )
{
	if((number%5)===0 && (number%3)===0)
	console.log("Numbers 4: "+number);
	number++;
}