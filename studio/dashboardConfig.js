export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6237577b65daf37dc7b25164',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-xjf19jii',
                  apiId: '0e3e4a2d-c579-4989-8b3b-7bb172caceee'
                },
                {
                  buildHookId: '6237577b4244cd78d4e2ae8a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sybfinyt',
                  apiId: 'cf197dac-88ad-4a61-a957-159ae7d0151c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmoralest10/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sybfinyt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
