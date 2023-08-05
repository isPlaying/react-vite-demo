import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import viteEslint from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

const variablePath = path.resolve(__dirname, '../src/variable.less');

const viteBaseConfig = {
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      less: {
        additionalData: `@import "${variablePath}";`,
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    react(),
    viteEslint(),
    createHtmlPlugin({
      entry: 'src/index.tsx',
      minify: true,
    }),
  ],
};
export default viteBaseConfig;
