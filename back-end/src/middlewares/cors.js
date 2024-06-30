const cors = require("cors");

module.exports.addCors = () => {
  return cors({
    origin: "*", 
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  });
};
