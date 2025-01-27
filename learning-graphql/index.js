import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import colors from "colors";	
// import { typeDefs } from "./schema.js";
import db from "./_db.js";

dotenv.config();

const typeDefs = `#graphql 

    type Query {
        firstQuery: String
        ageCal: Int
        getDevelopers: String
    }

    type Mutation {
        createDeveloper(name: String, age: Int, hobbies: String): Developer
    }

    type Developer {
        name: String
        age: Int
        hobbies: String
    }

`;

const resolvers = {
    Query: {
        firstQuery: () => {
            return "Hello world!";
        },

        ageCal: () => {
            return 1200;
        },

        getDevelopers: () => {
            return "We are all developers";
        }
    },

    Mutation: {
        createDeveloper: (_,  {name, age, hobbies}) => {
            const newDeveloper = {
                name,
                age,
                hobbies
            };
            return newDeveloper;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log(`Server ready at URL ${url}`.bgGreen.white);

