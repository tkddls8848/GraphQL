import {Movies, getMovies} from "./DB";

const resolvers = {
    Query : {
        Movies: (_,{limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;