const path = require('path')
const {defineConfig} = require('vite')

module.exports = defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'built/main.js'),
			name: 'niance-editor',
			fileName: (format) => `niance-editor.${format}.js`
		}
	}
});

