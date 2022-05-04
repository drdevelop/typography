/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { defineConfig } = require('vite');
const dynamicImportVars = require('@rollup/plugin-dynamic-import-vars').default;
const vue = require('@vitejs/plugin-vue').default;

/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  optimizeDeps: {
    include: [
      'intersection-observer',
      'localforage',
      'lodash',
      'resize-observer-polyfill',
      'screenfull',
      // 'vue-demi',
      'mockjs',
      'axios',
    ],
    exclude: ['vue-demi'],
  },
  plugins: [
    vue(),
    dynamicImportVars(),
  ],
  build: {
    minify: true,
    lib: {
      entry: path.resolve('./src/index.ts'),
      name: '@typography-org/vue',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue-demi', 'vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
};
