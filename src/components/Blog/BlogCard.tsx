import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PublishedOnDate from './PublishedOnDate';
import { ALL_FILTER } from './ALL_FILTER';
import { IBlogPost } from './BlogTypes';

interface IBlogCardProps {
    post: IBlogPost;
    categoryFilter: string;
}

const BlogCard = ({ post, categoryFilter }: IBlogCardProps) => {
    const { node } = post;
    const { title, date, path, featuredImage, category } = node.frontmatter;
    const mightHideCard = isShown(categoryFilter, category) ? '' : 'hide-card';

    return (
        <div className={`margin-container upscale-container project-container blog-card col-xs-12 col-sm-6 col-md-4 col-lg-3 ${mightHideCard}`}>
            <div className="-curved-border">
                <div key={node.id}>
                    <Img className="container-top-image" fluid={featuredImage.childImageSharp.fluid} />
                    <div className="padding-container">
                        <h2>{title}</h2>
                        <PublishedOnDate date={date} />
                        <p>{node.excerpt}</p>
                        <Link className="btn" to={path}>
                            <span className="fa fa-book" /> Read More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const isShown = (categoryFilter: string, currentCategory: string): boolean => (
    categoryFilter === ALL_FILTER || currentCategory === categoryFilter
);

export default BlogCard;