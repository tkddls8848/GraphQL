import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({});

server.start(()=>{console.log("hello GraphQL server")})