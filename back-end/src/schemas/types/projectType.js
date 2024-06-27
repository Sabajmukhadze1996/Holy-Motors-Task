const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        imgTitle: { type: GraphQLString },
        img: { type: GraphQLString },
    }),
});

module.exports = ProjectType;
