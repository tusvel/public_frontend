type BuildMode = 'production' | 'development';

export type BuildPaths = {
	entry: string;
	build: string;
	html: string;
	src: string;
};

export type BuildEnv = {
	mode: BuildMode;
	port: number;
	apiUrl: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiUrl: string;
	project: 'storybook' | 'jest' | 'frontend';
};
