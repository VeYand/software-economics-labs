import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	base: '/software-economics-labs/lab8',
	server: {
		port: 3000,
		open: true
	},
	build: {
		outDir: 'dist',
		sourcemap: true
	}
})