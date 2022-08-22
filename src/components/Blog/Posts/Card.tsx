import React from 'react';
import Link from 'gatsby-link';
import PublishedOnDate from '../Icons/PublishedOnDate';
import Tags from '../Icons/Tags';
import Category from '../Icons/Category';
import { ALL_FILTER } from '../ALL_FILTER';
import { IBlogPost } from '../BlogTypes';
import IconText from '../../Shared/IconText';
import ReadBlogIcon from '../Icons/ReadBlogIcon';
import Div from '../../Shared/UnstyledDiv';
import ImageTopCard from '../../Shared/ImageTopCard';
import { blogCard, hideCard, icons } from '../../../styles/layout/components/Blog/Posts/Card.module.scss';

interface IBlogCardProps {
    post: IBlogPost;
    categoryFilter: string;
    tagFilters: string[];
}

const Card = ({ post, categoryFilter, tagFilters }: IBlogCardProps) => {
    const { node: { excerpt, frontmatter } } = post;
    const { title, date, path, featuredImage, featuredImageAltText, category, tags } = frontmatter;
    const mightHideCard = isShown(categoryFilter, category, tagFilters, tags) ? '' : hideCard;

    return (
        <ImageTopCard
            image={featuredImage.childImageSharp.fluid}
            imageAltText={featuredImageAltText} 
            className={`${blogCard} margin-container col-xs-12 col-sm-6 col-md-4 col-lg-4 ${mightHideCard}`}
            hasInnerMargin
        >
            <div className={icons}>
                <Div><PublishedOnDate date={date} /></Div>
                <Div><Category category={category} /></Div>
                <Div><Tags tags={tags} /></Div>
            </div>
            <h2>{title}</h2>
            <p className="-secondary-text">{excerpt}</p>
            <Link className="btn -secondary-text" to={path} aria-label={`Read more about ${title}`}>
                <IconText icon={<ReadBlogIcon />} text="Read More" />
            </Link>
        </ImageTopCard>
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

export default Card;