const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://www.rodneymcquain.com',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
    siteMetadata: {
        title: `Rodney McQuain`,
        description: `Software engineer and competitive Super Smash Bros. Melee player`,
        author: `Rodney McQuain`,
        siteUrl: siteUrl,
        image: `/code.jpg`,
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-json`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-tslint`,
        gatsbyPluginNetlify(),
        gatsbyPluginSass(),
        gatsbyPluginManifest(),
        gatsbyPluginOffline(),
        gatsbyPluginSitemap(),
        gatsbyPluginRobotsTxt(),
        gatsbyPluginGoogleAnalytics(),
        gatsbySourceFilesystemData(),
        gatsbySourceFilesystemPages(),
        gatsbyTransformerRemark(), 
    ],
}

function gatsbyPluginNetlify() {
    return ({
        resolve: `gatsby-plugin-netlify`,
        options: {
            headers: {
                "/*": [ "X-Frame-Options: SAMEORIGIN" ]
            }
        },
    });
}

function gatsbyPluginSass() {
    return ({
        resolve: `gatsby-plugin-sass`,
        options: {
            cssLoaderOptions: {
                modules: {
                    exportLocalsConvention: 'camelCaseOnly',
                },
            },
        },
    });
}

function gatsbyPluginManifest() {
    return ({
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `Rodney McQuain: Personal Site`,
            short_name: `Rodney McQuain`,
            start_url: `/`,
            background_color: `#222`,
            theme_color: `#222`,
            display: `standalone`,
            icon: `src/assets/svg/round-square-logo.svg`,
        },
    });
}

function gatsbyPluginOffline() {
    return ({
        resolve: `gatsby-plugin-offline`,
        options: { 
            precachePages: [`*/blog-posts/*`], 
        },
    });
}

function gatsbyPluginSitemap() {
    return ({
        resolve: `gatsby-plugin-sitemap`,
        options: {
            query: allSitesQuery(),
            serialize: generateSitemap,
        }
    });

    function allSitesQuery() {
        return `
            {
                site {
                    siteMetadata {
                        siteUrl
                    }
                }
    
                allSitePage {
                    edges {
                        node {
                            path
                        }
                    }
                }
            }
        `;
    }
    
    function generateSitemap({ site, allSitePage }) {
        const BLOG_POST_URL = '/blog-posts/';
        const DEFAULT_PRIORITY = 0.5;
        return allSitePage.edges.map(
            ({ node: { path }}) => ({
                url: site.siteMetadata.siteUrl + path,
                changefreq: `daily`,
                priority: path.includes(BLOG_POST_URL) && !path.endsWith(BLOG_POST_URL) ? DEFAULT_PRIORITY + 0.2 : DEFAULT_PRIORITY,
            })
        );
    }
}

function gatsbyPluginRobotsTxt() {
    return ({
        resolve: `gatsby-plugin-robots-txt`,
        options: {
            resolveEnv: () => NETLIFY_ENV,
            env: {
                production: {
                    policy: [{ userAgent: '*' }],
                },
                'branch-deploy': {
                    policy: [{ userAgent: '*', disallow: ['/'] }],
                    sitemap: null,
                    host: null,
                },
                'deploy-preview': {
                    policy: [{ userAgent: '*', disallow: ['/'] }],
                    sitemap: null,
                    host: null,
                },
            },
        },
    });
}

function gatsbyPluginGoogleAnalytics() {
    return ({
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-155137763-1",
            head: true,
        },
    });
}

function gatsbySourceFilesystemData() {
    return ({
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/data`,
            name: `data`,
        },
    });
}

function gatsbySourceFilesystemPages() {
    return ({
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/pages`,
            name: `pages`,
        },
    });
}

function gatsbyTransformerRemark() {
    return ({
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                `gatsby-remark-autolink-headers`,
                `gatsby-remark-prismjs`,
                {
                    resolve: `gatsby-remark-images`,
                    options: { 
                        maxWidth: 1200, 
                    },
                },
                {
                    resolve: `gatsby-remark-copy-linked-files`,
                    options: {
                        ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
                    },
                },
            ],
        },
    });
}