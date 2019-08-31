module.exports = {
    siteMetadata: {
        title: `Rodney McQuain`,
        description: `Yet another computer science student, come learn about me.`,
        author: `Rodney McQuain`,
        siteUrl: `https://rodney-mcquain.netlify.com`,
        image: `/code.jpg`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
        resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages`,
            },
        },
        `gatsby-transformer-json`,
        {
        resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data`,
                name: `data`
            },
        },
        `gatsby-plugin-catch-links`,
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
