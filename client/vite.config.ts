import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import fs from 'fs'

const scssVariables = fs.readFileSync(path.join(__dirname, './src/style/variables.scss'), 'utf-8')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), tsconfigPaths()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: scssVariables
			}
		}
	}
})
