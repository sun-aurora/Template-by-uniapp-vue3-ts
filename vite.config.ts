import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import vitePluginImp from "vite-plugin-imp";

import path from "path";
import h5ProdEffectPlugin from 'uni-vite-plugin-h5-prod-effect'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // 对h5 production环境打包时的特殊处理，否则uni-crazy-router在这个环境会异常
    h5ProdEffectPlugin(),
    vitePluginImp()
  ],
  resolve: {
    // 配置别名
    alias: {
      '@': _resolve('src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: { charset: false, additionalData: `@import "@/styles/variables.scss";` },
    }
  },
});


