module.exports = {
    siteMetadata: {
        title: `Rodney McQuain`,
        description: `Yet another computer science student, come learn about me.`,
        author: `Rodney McQuain`,
        siteUrl: `https://rodney-mcquain.netlify.com`,
        image: `code.jpg`,
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        `gatsby-plugin-catch-links`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data`,
                name: `data`
            },
        },
        { 
        resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
                name: `pages`,
            },
        },
        {
        resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-prismjs`,
                ]
            },
        },
    ],
}
