const OurProjectsModel = require("../models/OurProjectsModel");
const OurWorksModel = require("../models/OurWorksModel");

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

module.exports = { resolvers }