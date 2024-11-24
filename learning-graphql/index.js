import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// types
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
    Query: {
        games: () => {
            return db.games;
        },
        game: (_, { id }) => {
            const game = db.games.find((game) => game.id === id);
            if(!game){
                throw new Error(`Game with ID ${id} not found`)
            }
            return game;
        },
        reviews: () => {
            return db.reviews
        },
        review: (_, { id }) => {
            const review = db.reviews.find((review) => review.id === id);
            if(!review){
                throw new Error(`Review with ID ${id} not found`)
            }
            return review;
        },
        authors: () => {
            return db.authors
        },
        author: (_, { id }) => {
            const author = db.authors.find((author) => author.id === id);
            if(!author){
                throw new Error(`Author with ID ${id} not found`);
            }
            return author;
        }
    },

    Game: {
        reviews: (parent) => {
            const reviews = db.reviews.filter((review) => review.game_id === parent.id);
            if(!reviews){
                throw new Error(`Game review not found!`);
            }
            return reviews;
        }
    },

    Author: {

    },

    Review: {

    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at PORT ${4000}`);

