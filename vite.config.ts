import { defineConfig, mergeConfig } from 'vite';
import viteBaseConfig from './config/vite.config.base';
import viteDevConfig from './config/vite.config.dev';
import viteProdConfig from './config/vite.config.prod';

export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return mergeConfig(viteBaseConfig, viteDevConfig);
  } else {
    return mergeConfig(viteBaseConfig, viteProdConfig);
  }
});
