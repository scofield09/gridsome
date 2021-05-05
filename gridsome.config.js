// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "gridsome",
  plugins: [{
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['journalpost', 'projectpost', ],
        singleTypes: ['forstry'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  templates: {
    // 集合的名字，这个是怎么来的?
    // 是插件中的typeName+contentTypes的name
    StrapiProjectpost: [
      {
        path: '/projectposts/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ],
    StrapiJournalpost: [
      {
        path: '/journalposts/:id',
        component: './src/templates/JournalPost.vue'
      }
    ]
  }
};