import {getMovies, getMovie} from "./DB";

const resolvers = {
    Query : {
        movies: (_,{limit, rating}) => getMovies(limit, rating),
        movie: (_,{id}) => getMovie(id)
    }
};

export default resolvers;