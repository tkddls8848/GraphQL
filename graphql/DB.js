export let Movies = [
    {
        id:0,
        name:"Movie1",
        score:10
    },
    {
        id:1,
        name:"Movie2",
        score:10
    },
    {
        id:2,
        name:"Movie3",
        score:10
    }
];

export const getById = (id) => {
    const filteredMovie = Movies.filter((Movie) => {return Movie.id === id});
    return filteredMovie[0]
}

export const deleteMovie = (id) => {
    const filteredMovie = Movies.filter((Movie) => Movie.id !== id);
    if(Movies.length > filteredMovie.length){
        Movies = filteredMovie;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${Movies.length + 1}`,
        name: name,
        score: score
    }
    Movies.push(newMovie);
    return newMovie;
}
