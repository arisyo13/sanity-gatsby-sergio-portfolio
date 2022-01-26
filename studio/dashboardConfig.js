export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61f1ca2e69a091586323447d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-sergio-portfolio-studio',
                  apiId: '9a1f3279-0cf4-4e94-825b-e307607dbb13'
                },
                {
                  buildHookId: '61f1ca2e93c41354340e5b82',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-sergio-portfolio',
                  apiId: '8ecf1bc3-19df-4e63-958e-d46be32287f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arisyo13/sanity-gatsby-sergio-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-sergio-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
