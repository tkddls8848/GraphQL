import {Movies, getById, addMovie, deleteMovie} from "./DB";

const resolvers = {
    Query : {
        Movies: () => Movies,
        Movie: (_,{id}) => getById(id)
    },
    Mutation :{
        addMovie:(_,{name,score}) => addMovie(name, score),
        deleteMovie:(_,{id}) => deleteMovie(id)
    }
};

export default resolvers;