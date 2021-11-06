const UserList = [
    {
        id: 1,
        name: "Irakli",
        username: "noface",
        age: 69,
        nationality: "GEORGIA",
        friends: [
            {
                id: 2,
                name: "Mariam",
                username: "canidiesir",
                age: 21,
                nationality: "GEORGIA",
            },
            {
                id: 5,
                name: "NNN",
                username: "N3",
                age: 5,
                nationality: "USA",
            },
        ],
    },
    {
        id: 2,
        name: "Mariam",
        username: "canidiesir",
        age: 21,
        nationality: "GEORGIA",
    },
    {
        id: 3,
        name: "someone",
        username: "so",
        age: 25,
        nationality: "AFRICA",
        friends: [
            {
                id: 2,
                name: "Mariam",
                username: "canidiesir",
                age: 21,
                nationality: "GEORGIA",
            },
        ],
    },
    {
        id: 4,
        name: "bb",
        username: "bbbr",
        age: 60,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "NNN",
        username: "N3",
        age: 5,
        nationality: "USA",
    },
];

const MovieList = [
    {
        id: '1',
        name: 'the wok',
        date: 2021,
        inTheaters: true,
    },
    {
        id: '2',
        name: 'john xena',
        date: 2020,
        inTheaters: true
    },
    {
        id: '3',
        name: 'unknown',
        date: 2023,
        inTheaters: false
    }
]

const MovieUserConnection = [
    {
        userId: '1',
        movieId: ['1', '2']
    },
    {
        userId: '2',
        movieId: ['1']
    },
    {
        userId: '3',
        movieId: []
    },
    {
        userId: '4',
        movieId: []
    },
    {
        userId: '5',
        movieId: []
    },

]

module.exports = {UserList, MovieList, MovieUserConnection}
