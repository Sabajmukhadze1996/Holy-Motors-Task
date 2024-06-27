const Project = require('../models/project');
const Work = require('../models/work');

module.exports = {
    Query: {
        projects: async () => await Project.find(),
        project: async (_, { id }) => await Project.findById(id),
        works: async () => await Work.find(),
        work: async (_, { id }) => await Work.findById(id),
    },
    Mutation: {
        addProject: async (_, { id, title, description, imgTitle, img }) => {
            const project = new Project({ id, title, description, imgTitle, img });
            return await project.save();
        },
        updateProject: async (_, { id, title, description, imgTitle, img }) => {
            return await Project.findByIdAndUpdate(id, { title, description, imgTitle, img }, { new: true });
        },
        deleteProject: async (_, { id }) => {
            return await Project.findByIdAndRemove(id);
        },
        addWork: async (_, { title, description, img }) => {
            const work = new Work({ title, description, img });
            return await work.save();
        },
        updateWork: async (_, { id, title, description, img }) => {
            return await Work.findByIdAndUpdate(id, { title, description, img }, { new: true });
        },
        deleteWork: async (_, { id }) => {
            return await Work.findByIdAndRemove(id);
        },
    },
};
