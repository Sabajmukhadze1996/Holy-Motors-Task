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
          const newProject = new OurProject({ title, description, img });
          await newProject.save();
          return newProject;
        } catch (error) {
          throw new Error("Error creating project");
        }
      },
      createWork: async (_, { title, description, img }) => {
        try {
          const newWork = new OurWork({ title, description, img });
          await newWork.save();
          return newWork;
        } catch (error) {
          throw new Error("Error creating work");
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
