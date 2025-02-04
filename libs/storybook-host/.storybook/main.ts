import type { StorybookConfig } from '@storybook/react-vite';

import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../apps/demo/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../../libs/shared/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [react(), nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')({
              config: '../../../apps/demo/tailwind.config.js', // Ensure this path points to your Tailwind config
            }),
            require('autoprefixer'),
          ],
        },
      },
    }),
};

export default config;
