import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://micvitc.github.io/mics-guide-to-ai-ml/',
  base: '/mics-guide-to-ai-ml/',
  integrations: [starlight({
    title: 'Guide to AI/ML',
    logo: {
      src: './src/assets/file_removed-transformed.png',
    },
    social: {
      github: 'https://github.com/micvitc/mics-guide-to-ai-ml'
    },
    sidebar: [{
      label: '[home] Home',
      link: '/'
    }, {
      label: '[list] Introduction',
      link: '/introduction/'
    }, {
      label: '[box] Guides',
      autogenerate: {
        directory: 'guides'
      }
    }, {
      label: '[book] Reference',
      autogenerate: {
        directory: 'reference'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});