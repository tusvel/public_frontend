import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

	const babel = {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env'],
				"plugins": [
					[
						"i18next-extract",
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					],
				]
			}
		}
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const svg = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: ['@svgr/webpack'],
	}

	const scss =  {
			test: /\.s[ac]ss$/i,
			use: [
				isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
				{
					loader: "css-loader",
					options: {
						modules: {
							auto: (resPath: string) => Boolean(resPath.includes('.module')),
							localIdentName: isDev
								? '[path][name]__[local]--[hash:base64:5]'
								: "[hash:base64:8]"
						}
					}
				},
				"sass-loader",
			],
	}

	const typeScript = {
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		}

	return [
		fileLoader,
		svg,
		babel,
		typeScript,
		scss
	]
}