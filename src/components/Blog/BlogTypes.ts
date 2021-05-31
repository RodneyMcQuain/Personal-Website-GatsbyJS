export interface IBlogPost {
    node: INode
}

interface INode {
    id: string;
    excerpt: string;
    frontmatter: IFrontmatter;
}

interface IFrontmatter {
    path: string;
    title: string;
    date: Date;
    featuredImage: any; // Don't know the type of gatsby-image
    featuredImageAltText: string;
    category: Category;
    tags: Tags;
    lastUpdated: Date;
}

export type Category = string;
export type Tags = string[];