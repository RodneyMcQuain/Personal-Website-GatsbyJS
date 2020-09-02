import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby";
import { isBrowser } from '../../services/browser';

function SEO({ description, lang, meta, title, image, type, url }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        image
                        siteUrl
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const metaImage = image || site.siteMetadata.image;
    const imageUrl = `${site.siteMetadata.siteUrl}/${metaImage}`;
    const metaType = type || 'website';

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: `${title} | ${site.siteMetadata.title}`,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:image`,
                    content: imageUrl,
                },
                {
                    property: `og:type`,
                    content: metaType,
                },
                {
                    property: `og:url`,
                    content: isBrowser() && (site.siteMetadata.siteUrl + document.location.pathname)
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: imageUrl,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
    type: '',
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO;