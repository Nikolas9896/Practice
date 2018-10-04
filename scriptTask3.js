var userAge = prompt("How old are you?");
if(userAge < 0){
alert("Negative age isn't possible "+userAge);
console.log("Negative age isn't possible "+userAge);
}
else if(userAge < 18){
alert("So, sorry but this party isn't for you young client. You age only "+userAge);
console.log("So, sorry but this party isn't for you young client. You are only "+userAge);
}
else if (userAge >= 18 && userAge < 21) {
alert("You are welcome! But only without drinks! You aren't 21 old. You are "+userAge);
console.log("You are welcome! But only without drinks! You aren't 21 old. You are "+userAge);
}
else {
alert("Go to the party and get the free shot "+userAge);
console.log("Go to the party and get the free shot "+userAge);
}
if (userAge == 4 || userAge == 9 || userAge == 16 || userAge == 25 || userAge == 36 || userAge == 49 || userAge == 64) {
alert("Perfect square age! You are "+userAge);
console.log("Perfect square age! You are "+userAge);
}