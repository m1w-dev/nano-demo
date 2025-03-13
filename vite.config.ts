import path from 'path'
import { config } from 'dotenv'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


config()

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app/'),
      features: path.resolve(__dirname, './src/features/'),
      pages: path.resolve(__dirname, './src/pages/'),
      shared: path.resolve(__dirname, './src/shared/'),
      widgets: path.resolve(__dirname, './src/widgets/'),
    },
  },
  define: {
    __CHAT_URL__: JSON.stringify(process.env['VITE_CHAT_URL']),
    __CHAT_UUID__: JSON.stringify(process.env['VITE_CHAT_UUID']),
    __CHAT_FIRST_MESSAGE__: JSON.stringify(process.env['VITE_CHAT_FIRST_MESSAGE']),
  },
  plugins: [react()],
})
