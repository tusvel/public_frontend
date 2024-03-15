import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

function isAbsolute(value: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
  return layers.some((layer) => value.startsWith(layer));
}

project.getSourceFiles().map((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.map((declaration) => {
    const value = declaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      declaration.setModuleSpecifier('@/' + value);
    }
  });
});

project.save();
