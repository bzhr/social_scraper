const littleforkCommands = require("./src/littleforkCommands");

exports.onPreBuild = ({ input }) => {
  littleforkCommands.processNewForms()  
};
