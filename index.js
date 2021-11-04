const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
    .then(({port}) => {
        console.log(`API IS RUNNING AT: ${port}`)
    })