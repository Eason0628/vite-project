import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import url from "url";
import path, { dirname } from "path";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
