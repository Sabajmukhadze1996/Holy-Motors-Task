const cors = require("cors");

module.exports.addCors = () => {
  return cors({
    origin: true, 
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  });
};
