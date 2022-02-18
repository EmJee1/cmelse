import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgLoader from 'vite-svg-loader'
import path from 'path'
import fs from 'fs'

const scssVariables = fs.readFileSync(path.join(__dirname, './src/style/variables.scss'), 'utf-8')
const scssMixins = fs.readFileSync(path.join(__dirname, './src/style/mixins.scss'), 'utf-8')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), tsconfigPaths(), svgLoader()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `${scssVariables}\n${scssMixins}`,
			},
		},
	},
})
