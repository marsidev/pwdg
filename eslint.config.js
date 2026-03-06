import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
	// Global ignores
	{
		ignores: ['dist/**', '.output/**', 'node_modules/**', '.astro/**', '**/*.css', '**/*.svg']
	},

	// ESLint recommended
	js.configs.recommended,

	// TypeScript
	...tseslint.configs.recommended,

	// Astro
	...astro.configs.recommended,

	// Prettier - must be last to override other configs
	prettier,

	// Custom rules
	{
		rules: {
			'eol-last': 'off'
		}
	},

	// CommonJS files (config files)
	{
		files: ['**/*.cjs'],
		languageOptions: {
			globals: {
				...globals.node,
				module: 'readonly',
				require: 'readonly',
				exports: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly'
			}
		}
	},

	// Astro-specific overrides
	{
		files: ['**/*.astro'],
		rules: {
			'astro/no-conflict-set-directives': 'warn',
			'astro/no-set-html-directive': 'warn',
			'astro/no-unused-define-vars-in-style': 'warn'
		}
	}
]
