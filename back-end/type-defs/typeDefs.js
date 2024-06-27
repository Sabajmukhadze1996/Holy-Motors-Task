const { gql } = require("apollo-server-express");

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

module.exports = { typeDefs };
