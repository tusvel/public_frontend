const { Project } = require('ts-morph');

const project = new Project({});

project.addDirectoryAtPath('node_modules/.cache');
const cacheDirectory = project.getDirectory('node_modules/.cache');

cacheDirectory?.delete();

void project.save();
