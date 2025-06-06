import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "@svgr/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr({ svgo: false, typescript: true }) as Plugin, react()],
  // base: process.env.NODE_ENV === "production" ? "/dpyo-portfolio/" : "/",
});
