import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver"

const server = new GraphQLServer({
    typeDefs:"graphql/schema.graphql",
    resolvers:resolvers,
    connectToDevTools : true
});

server.start(()=>{console.log("hello GraphQL server")});