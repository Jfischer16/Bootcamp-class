var movies = [
    {
        title: "braveheart",
        hasWatched: true,
        rating: 5
    },
    {
        title: "wonder woman",
        hasWatched: false,
        rating: 4
    }
]

function buildString(movie) {
    var result = "you have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function (movie) {
    console.log(buildString(movie));
});
