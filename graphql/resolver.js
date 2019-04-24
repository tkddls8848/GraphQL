import {Movies, getMovies} from "./DB";

const resolvers = {
    Query : {
        Movies: () => Movies,
        Movie: (_,{limit, rating}) => getMovies(limit, rating)
    }
};

export default resolvers;