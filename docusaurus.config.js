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
        docs: {
          sidebarPath: './sidebars.js',
          // Remove edit URL
          editUrl: undefined,
          routeBasePath: 'lessons',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AE Pronunciation',
        logo: {
          alt: 'AE Pronunciation Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Home',
            activeBaseRegex: '^/$',
          },
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
        copyright: `Copyright © ${new Date().getFullYear()} aepronunciation.com. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
