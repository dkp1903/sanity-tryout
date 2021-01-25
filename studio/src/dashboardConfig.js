export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '600e2c39d04e2fea8a12772a',
                  title: 'Sanity Studio',
                  name: 'sanity-tryout-studio',
                  apiId: '22361ba8-7e6b-4021-bcfd-5f4664b954cf'
                },
                {
                  buildHookId: '600e2c39e75f9a84efa88718',
                  title: 'Blog Website',
                  name: 'sanity-tryout',
                  apiId: '356ab041-afbd-4f6e-9af7-3d3cea875d5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dkp1903/sanity-tryout',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-tryout.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
