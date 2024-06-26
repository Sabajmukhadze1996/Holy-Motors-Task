const express = require("express");
const { dbConnect } = require("./db/dbConfig");
const { ApolloServer, gql } = require("apollo-server-express");

const OurProjectsModel = require("./models/OurProjectsModel");
const OurWorksModel = require("./models/OurWorksModel");

dbConnect();

const typeDefs = gql`
  type OurProject {
    id: ID!
    title: String!
    description: String!
    img: String!
  }

  type OurWork {
    id: ID!
    title: String!
    description: String!
    img: String!
  }

  type Query {
    test: String
    getAllProjects: [OurProject]
    getAllWorks: [OurWork]
  }

  type Mutation {
    createProject(
      title: String!
      description: String!
      img: String!
    ): OurProject
    createWork(title: String!, description: String!, img: String!): OurWork
  }
`;

const resolvers = {
  Query: {
    test: () => "test",
    getAllProjects: async () => {
      try {
        return await OurProjectsModel.find();
      } catch (error) {
        throw new Error("Error fetching projects");
      }
    },
    getAllWorks: async () => {
      try {
        return await OurWorksModel.find();
      } catch (error) {
        throw new Error("Error fetching works");
      }
    },
  },
  Mutation: {
    createProject: async (_, { title, description, img }) => {
      try {
        const newProject = new OurProjectsModel({ title, description, img });
        await newProject.save();
        return newProject;
      } catch (error) {
        throw new Error("Error creating project");
      }
    },
    createWork: async (_, { title, description, img }) => {
      try {
        const newWork = new OurWorksModel({ title, description, img });
        await newWork.save();
        return newWork;
      } catch (error) {
        throw new Error("Error creating work");
      }
    },
  },
};

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
