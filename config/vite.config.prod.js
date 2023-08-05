import importToCDN from 'vite-plugin-cdn-import';
import { createHtmlPlugin } from 'vite-plugin-html';

const viteProdConfig = {
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    assetsInlineLimit: 8 * 1024,
  },
  plugins: [
    importToCDN({
      modules: [
        {
          name: 'react',
          var: 'React',
          path: 'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
        },
      ],
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
};

export default viteProdConfig;
