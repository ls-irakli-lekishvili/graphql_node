const { UserList } = require('../DummyData')

const resolvers = {
     Query: {
         users: () => {
             return UserList
         },
         user: (_, args) => {
             const {id} = args;
             return UserList.find(user => user.id.toString() === id);
         }
     }
}

module.exports = { resolvers };