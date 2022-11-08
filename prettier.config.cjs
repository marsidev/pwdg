module.exports = {
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	endOfLine: 'lf',
	arrowParens: 'avoid',
	plugins: [require('prettier-plugin-tailwindcss'), require('prettier-plugin-astro')],
	astroAllowShorthand: false,
	overrides: [
		{
			files: ['*.json', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false
			}
		},
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
