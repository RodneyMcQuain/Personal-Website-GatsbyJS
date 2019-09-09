import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FullDate from './FullDate';

const BlogCard = ({post}) => {
    const { node } = post;
    const { title, date, path, featuredImage } = node.frontmatter;

    return (
        <div className="margin-container upscale-container project-container col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="-curved-border">
                <div key={node.id}>
                    <Img className="container-top-image" fluid={featuredImage.childImageSharp.fluid} />
                    <div className="padding-container">
                        <h2>{title}</h2>
                        <FullDate date={date} />
                        <p>{node.excerpt}</p>
                        <Link className="btn" to={path}>
                            <span>Read More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;