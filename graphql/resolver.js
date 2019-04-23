import {Movies, getById, addMovie} from "./DB";

const resolvers = {
    Query : {
        Movies: () => Movies,
        Movie: (_,{id}) => getById(id)
    },
    Mutation :{
        addMovie:(_,{name,score}) => addMovie(name, score)
    }
};

export default resolvers;