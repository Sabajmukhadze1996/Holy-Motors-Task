const express = require("express");
const { dbConnect } = require("./db/dbConfig");
const { ApolloServer, gql } = require("apollo-server-express");

const OurProjectModel = require("./models/OurProjectsModel");

dbConnect();

const typeDefs = gql`
  type OurProject {
    id: ID!
    title: String!
    description: String!
    img: String!
  }

  type Query {
    test: String
    getAllProjects: [OurProject]
  }

  type Mutation {
    createProject(title: String!, description: String!, img: String!): OurProject
  }
`;


const resolvers = {
    Query: {
      test: () => "test",
      getAllProjects: async () => {
        try {
          return await OurProject.find();
        } catch (error) {
          throw new Error("Error fetching projects");
        }
      },
    },
    Mutation: {
      createProject: async (_, { title, description, img }) => {
        try {
          const newProject = new OurProject({ title, description, img });
          await newProject.save();
          return newProject;
        } catch (error) {
          throw new Error("Error creating project");
        }
      },
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
