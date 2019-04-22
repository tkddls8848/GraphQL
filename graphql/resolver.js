const PSI = {
    age:30,
    name:"PSI",
    job:"no job"
}

const resolvers = {
    Query : {
        Person: () => PSI
    }
};

export default resolvers;