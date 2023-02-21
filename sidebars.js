/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  // But you can create a sidebar manually
  holojaneway:[
    'holojaneway/-5',
    'holojaneway/-4',
    'holojaneway/-3',
    'holojaneway/-2',
    'holojaneway/-1',
    'holojaneway/-0',
    'holojaneway/0',
    'holojaneway/0.1',
    'holojaneway/0.2',
    'holojaneway/1',
    'holojaneway/2',
    'holojaneway/3',
    'holojaneway/4',
    'holojaneway/5',
    'holojaneway/6',
    'holojaneway/∞',
  ],
  madparticle:[
    'madparticle/home',
    'madparticle/command',
    'madparticle/designer',
    'madparticle/fabric',
    'madparticle/server',
  ],
  r6ms:[
    'r6ms/home',
    'r6ms/player',
    'r6ms/map',
    'r6ms/op',
    'r6ms/cross_server',
    'r6ms/data_collect',
    {
      type: 'category',
      label: '更新日志',
      collapsed: true,
      items: [
        'r6ms/update_log/1.0.0'
      ],
    }
  ]
};

module.exports = sidebars;
