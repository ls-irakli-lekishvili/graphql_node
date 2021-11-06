const {gql} = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User!]
        favoriteMovies: [Movie!]
    }
    
    type Movie {
        id: ID!
        name: String!
        date: Int,
        inTheaters: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(name: String!): Movie
    }
    
    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = UNKNOWN
    }
    
    type Mutation {
        createUser(input: CreateUserInput!): User!
    }
    
    enum Nationality {
        GEORGIA,
        USA,
        CANADA,
        China,
        AFRICA,
        GERMANY,
        UNKNOWN
    }
`;

module.exports = {typeDefs}
