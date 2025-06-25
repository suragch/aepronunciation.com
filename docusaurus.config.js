// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'American English Pronunciation',
  tagline: 'Learn to speak American English with confidence',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aepronunciation.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'suragch', // Usually your GitHub org/user name.
  projectName: 'aepronunciation.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  plugins: [
    [
      '@docusaurus/plugin-content-pages',
      {
        id: 'stories',
        path: 'src/stories',
        routeBasePath: 'stories',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'American English Pronunciation',
        logo: {
          alt: 'American English Pronunciation Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/app',
            position: 'left',
            label: 'App',
          },
          {
            to: '/lessons',
            position: 'left',
            label: 'Lessons',
          },
          {
            to: '/stories',
            position: 'left',
            label: 'Stories',
          },
          {
            to: '/contact',
            position: 'left',
            label: 'Contact',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'App',
                to: '/app',
              },
              {
                label: 'Lessons',
                to: '/lessons',
              },
              {
                label: 'Stories',
                to: '/stories',
              },
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} aepronunciation.com. No rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
