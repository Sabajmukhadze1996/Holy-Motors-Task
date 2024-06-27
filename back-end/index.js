const express = require("express");
const { dbConnect } = require("./db/dbConfig");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./type-defs/typeDefs");
const { resolvers } = require("./resolvers/resolvers");

dbConnect();


async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
});
