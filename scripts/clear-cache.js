const { Project } = require('ts-morph');

const project = new Project({});

project.addDirectoryAtPath('node_modules/.cache');
const cacheDirectory = project.getDirectory('node_modules/.cache');

if (cacheDirectory) {
  cacheDirectory?.delete();
}

project.save().then(() => {});
