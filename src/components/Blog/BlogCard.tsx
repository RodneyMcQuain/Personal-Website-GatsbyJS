import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import PublishedOnDate from './PublishedOnDate';
import { ALL_FILTER } from './ALL_FILTER';
import { IBlogPost } from './BlogTypes';

interface IBlogCardProps {
    post: IBlogPost;
    categoryFilter: string;
    tagFilters: string[];
}

const BlogCard = ({ post, categoryFilter, tagFilters }: IBlogCardProps) => {
    const { node } = post;
    const { title, date, path, featuredImage, category, tags } = node.frontmatter;
    const mightHideCard = isShown(categoryFilter, category, tagFilters, tags) ? '' : 'hide-card';

    return (
        <div className={`margin-container upscale-container project-container blog-card col-xs-12 col-sm-6 col-md-4 col-lg-4 ${mightHideCard}`}>
            <div className="-curved-border">
                <div key={node.id}>
                    <Img className="container-top-image" fluid={featuredImage.childImageSharp.fluid} />
                    <div className="content">
                        <PublishedOnDate date={date} />
                        <h2>{title}</h2>
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

const isShown = (
    categoryFilter: string, 
    currentCategory: string, 
    tagFilters: string[], 
    currentTags: string[]
): boolean => ( 
    (categoryFilter === ALL_FILTER || currentCategory === categoryFilter) 
    && hasTag(tagFilters, currentTags)
);

const hasTag = (tagFilters: string[], currentTags: string[]): boolean => {
    if (tagFilters.length === 0)
        return true;

    for (const currentTag of currentTags)
        for (const tagFilter of tagFilters)
            if (tagFilter === currentTag)
                return true;  

    return false;
}

export default BlogCard;