import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/// <reference types="vitest/config" />
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'

// import { presetUno, presetAttributify, presetIcons } from "unocss";

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
    exports: 'named',
  },
}

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: false, // 输出单独 source文件
    reportCompressedSize: true, // 生成压缩大小报告
    cssCodeSplit: true,
    // 添加库模式配置
    lib: {
      entry: resolve(__dirname, 'src/entry.ts'),
      name: 'SSYUI',
      fileName: 'ssy-ui',
      // 导出模块格式
      formats: ['es', 'umd'],
    },
  },
})
