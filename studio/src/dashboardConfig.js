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
                  buildHookId: '5ee1815198f94e7326ba1123',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b1r9gben',
                  apiId: '16d316f5-2b40-4749-8f11-f20cfa4dce89'
                },
                {
                  buildHookId: '5ee18151d3f54b9e86b92d85',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3ygw7gpx',
                  apiId: 'dbd20f7e-b527-440b-ac60-a2e5ea37943a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidli3100/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3ygw7gpx.netlify.app', category: 'apps' }
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
