import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby";
import { isBrowser } from '../../services/browser';

interface ISEO {
    title: string;
    description?: string;
    lang?: string;
    type?: 'article' | 'website';
    image?: string;
}

const SEO = ({ title, description = null, lang = 'en', type = 'website', image = null }: ISEO) => {
    const { site: { siteMetadata } } = useStaticQuery(siteMetadataQuery);

    const metaDescription = description ?? siteMetadata.description;
    const imageUrl = `${siteMetadata.siteUrl}/${image ?? siteMetadata.image}`;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: `${title} | ${siteMetadata.title}`,
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
                    content: type,
                },
                {
                    property: `og:url`,
                    content: isBrowser() && (siteMetadata.siteUrl + document.location.pathname)
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: siteMetadata.author,
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
            ]}
        />
    );
}

const siteMetadataQuery = graphql`
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
`;

export default SEO;