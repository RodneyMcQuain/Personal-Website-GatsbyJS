const path = require('path');

exports.createPages = (({ actions, graphql }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const postTemplate = path.resolve('src/templates/BlogPost.js');

        resolve(
            graphql(`
                {
                    allMarkdownRemark (
                        sort: { order: ASC, fields: [frontmatter___date]}
                    ) {
                        edges {
                            node {
                                html
                                id
                                frontmatter {
                                    path
                                    title
                                    date
                                    author
                                }
                            }
                        }
                    }
                }
            `).then(result => {
                if (result.errors)
                    return Promise.reject(res.errors);

                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach(({ node }, index) => {
                    createPage({
                        path: node.frontmatter.path,
                        component: postTemplate,
                        context: {
                            previous: index === 0 ? null : posts[index - 1].node,
                            next: index === (posts.length - 1) ? null : posts[index + 1].node,
                        },
                    });

                    resolve();
                });
            })
        );
    });
});