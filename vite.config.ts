/* eslint-disable prefer-const */
import { setDefaultResultOrder } from 'dns'
import * as path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

setDefaultResultOrder('verbatim')

export default ({ mode }) => {
  let env = loadEnv(mode, process.cwd())
  env.MODE = mode

  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`,
  }

  return defineConfig({
    plugins: [
      react(),
      // TODO: Enable locally HTTPS protocol (https backend required)
      // basicSsl()
    ],
    define: envWithProcessPrefix,
    publicDir: 'assets',
    resolve: {
      alias: [
        {
          find: '@components',
          replacement: path.resolve(__dirname, './src/components'),
        },
        { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
        { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
        {
          find: '@assets',
          replacement: path.resolve(__dirname, './src/assets'),
        },
        {
          find: '@services',
          replacement: path.resolve(__dirname, './src/services'),
        },
        { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
        { find: '@dtos', replacement: path.resolve(__dirname, './src/dtos') },
        {
          find: '@config',
          replacement: path.resolve(__dirname, './src/config'),
        },
      ],
    },
    build: {
      chunkSizeWarningLimit: 1800,
    },
  })
}
