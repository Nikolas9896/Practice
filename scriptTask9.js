var movieDB = new Array(
{
	hasWatched: true,
	title: "James Bond 007 Golden Eye",
	rating: 4.5
},
{
	hasWatched: false,
	title: "Indiana Jones and Last Crusade",
	rating: 4.3
},
{
	hasWatched: false,
	title: "Mad Max Fury Road",
	rating: 4.8
},
{
	hasWatched: true,
	title: "Darkest Hour",
	rating: 3.2
}

	);

function showMovieDB()
{
	movieDB.forEach( function (movie) {
		var result = "You have ";
		if (movie.hasWatched)
			result+="watched ";
		else result+="not seen ";
		result+="\""+movie.title+"\" - ";
		result+= movie.rating+" stars";
		console.log(result);
	})

	// var length=movieDB.length
	// for(var i=0; i<length; i++)
	// {
	// 	console.log("You have "+movieDB[i].hasWatched+" \""+movieDB[i].title+"\" rating "+movieDB[i].rating +" stars");
	// }
}