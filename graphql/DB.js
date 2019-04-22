export const People = [
    {
        id:1,
        age:30,
        name:"PSI",
        job:"no job"
    },
    {
        id:2,
        age:31,
        name:"qwer",
        job:"1234"
    },
    {
        id:3,
        age:32,
        name:"1234",
        job:"qwer"
    }
];

export const getById = (id) => {
    const filteredPeople = People.filter((Person) => Person.id === id);
    return filteredPeople[0]
}
