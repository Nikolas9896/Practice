var movieDB = new Array(
{
	hasWatched: "watched",
	title: "James Bond 007 Golden Eye",
	rating: 4.5
},
{
	hasWatched: "not seen",
	title: "Indiana Jones and Last Crusade",
	rating: 4.3
},
{
	hasWatched: "seen",
	title: "Mad Max Fury Road",
	rating: 4.8
},
{
	hasWatched: "watched",
	title: "Darkest Hour",
	rating: 3.2
}

	);

function showMovieDB()
{
	var length=movieDB.length
	{
		console.log("You have "+movieDB[i].hasWatched+" \""+movieDB[i].title+"\" rating "+movieDB[i].rating +" stars");
	}
}