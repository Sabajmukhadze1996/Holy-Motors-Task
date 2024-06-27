const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLList } = require('graphql');
const resolvers = require('../resolvers');
const ProjectType = require('./types/projectType');
const WorkType = require('./types/workType');

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve: resolvers.Query.projects,
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: resolvers.Query.project,
        },
        works: {
            type: new GraphQLList(WorkType),
            resolve: resolvers.Query.works,
        },
        work: {
            type: WorkType,
            args: { id: { type: GraphQLID } },
            resolve: resolvers.Query.work,
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                imgTitle: { type: GraphQLString },
                img: { type: GraphQLString },
            },
            resolve: resolvers.Mutation.addProject,
        },
        updateProject: {
            type: ProjectType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                imgTitle: { type: GraphQLString },
                img: { type: GraphQLString },
            },
            resolve: resolvers.Mutation.updateProject,
        },
        deleteProject: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve: resolvers.Mutation.deleteProject,
        },
        addWork: {
            type: WorkType,
            args: {
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                img: { type: GraphQLString },
            },
            resolve: resolvers.Mutation.addWork,
        },
        updateWork: {
            type: WorkType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                description: { type: GraphQLString },
                img: { type: GraphQLString },
            },
            resolve: resolvers.Mutation.updateWork,
        },
        deleteWork: {
            type: WorkType,
            args: { id: { type: GraphQLID } },
            resolve: resolvers.Mutation.deleteWork,
        },
    },
});

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
});
