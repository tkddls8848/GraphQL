import {People, getById} from "./DB";

const resolvers = {
    Query : {
        People: () => People,
        Person: (_,{id}) => getById(id)
    }
};

export default resolvers;