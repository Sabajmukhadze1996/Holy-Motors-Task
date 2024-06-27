const { buildSchema, GraphQLSchema } = require('graphql');
const resolvers = require('../resolvers');

const schema = buildSchema(`
    type Project {
        id: ID!
        title: String!
        description: String!
        imgTitle: String!
        img: String!
    }

    type Work {
        id: ID!
        title: String!
        description: String!
        img: String!
    }

    type Query {
        projects: [Project]
        project(id: ID!): Project
        works: [Work]
        work(id: ID!): Work
    }

    type Mutation {
        addProject(id: ID!, title: String!, description: String!, imgTitle: String!, img: String!): Project
        updateProject(id: ID!, title: String, description: String, imgTitle: String, img: String): Project
        deleteProject(id: ID!): Project
        addWork(title: String!, description: String!, img: String!): Work
        updateWork(id: ID!, title: String, description: String, img: String): Work
        deleteWork(id: ID!): Work
    }
`);

module.exports = new GraphQLSchema({ query: resolvers.Query, mutation: resolvers.Mutation });
