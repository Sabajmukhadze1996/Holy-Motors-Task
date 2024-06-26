const express = require("express");
const { dbConnect } = require("./db/dbConfig");
const { ApolloServer, gql } = require("apollo-server-express");

dbConnect();

const typeDefs = gql`
  type Query {
    test: String
  }
`;

const resolvers = {
  Query: {
    test: () => "test",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  try {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  } catch (error) {
    console.log(error);
  }
});
