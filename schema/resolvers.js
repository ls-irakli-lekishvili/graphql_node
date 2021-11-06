const {UserList} = require('../DummyData')
const {MovieList} = require('../DummyData')
const {MovieUserConnection} = require('../DummyData')

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        user: (_, args) => {
            const {id} = args;
            return UserList.find(user => user.id.toString() === id);
        },
        movies: () => {
            return MovieList;
        },
        movie: (_, args) => {
            const {name} = args;
            return MovieList.find(movie => movie.name === name);
        }
    },

    Mutation: {
        createUser: (_, args) => {
            const user = args.input;
            const lastUserId = UserList[UserList.length - 1].id;
            user.id = lastUserId + 1;
            UserList.push(user);
            return user;
        }
    },

    User: {
        favoriteMovies: (user) => {
            const likedMovies = (MovieUserConnection
                .find(dbUser => user.id.toString() === dbUser.userId)?.movieId) || [];

            return likedMovies.length ?
                MovieList.filter(movie => likedMovies.includes(movie.id))
                : null;
        }
    }
}

module.exports = {resolvers};
