import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
	const typeScript = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}

	return [
		typeScript
	]
}