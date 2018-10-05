var number = -11;
while(number < 19)
{
	console.log("Numbers 1: "+number);
	number++;
}
number=10;
while(number <= 40 )
{
	console.log("Numbers 2: "+number);
	number++;
}
number=301;
while(number <= 333 )
{
	console.log("Numbers 3: "+number);
	number+=2;
}
number=5;
while( number <= 50 )
{
	if((number%5)===0 && (number%3)===0)
	console.log("Numbers 4: "+number);
	number++;
}