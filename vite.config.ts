import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: "app",
        replacement: path.resolve(__dirname, "./src/app"),
      },
      {
        find: "shared",
        replacement: path.resolve(__dirname, "./src/shared"),
      },
    ],
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
