const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const WorkType = new GraphQLObjectType({
    name: 'Work',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        img: { type: GraphQLString },
    }),
});

module.exports = WorkType;
