// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Primary sidebar configuration
  aeSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Pronunciation Lessons',
      link: {
        type: 'doc',
        id: 'lessons/index',
      },
      items: [
        'lessons/lesson-1',
        'lessons/lesson-2',
        'lessons/lesson-3',
        'lessons/lesson-4',
        'lessons/lesson-5',
        'lessons/lesson-6',
        'lessons/lesson-7',
        'lessons/lesson-8',
        'lessons/lesson-9',
        'lessons/lesson-10',
        'lessons/lesson-11',
        'lessons/lesson-12',
        'lessons/lesson-13',
        'lessons/lesson-14',
        'lessons/lesson-15',
        'lessons/lesson-16',
        'lessons/lesson-17',
        'lessons/lesson-18',
        'lessons/lesson-19',
        'lessons/lesson-20',
        'lessons/lesson-21',
        'lessons/lesson-22',
        'lessons/lesson-23',
        'lessons/lesson-24',
        'lessons/lesson-25',
        'lessons/lesson-26',
      ],
    },
  ],
};

export default sidebars;
