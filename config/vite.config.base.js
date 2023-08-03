import react from '@vitejs/plugin-react';
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
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [react()],
};
export default viteBaseConfig;
