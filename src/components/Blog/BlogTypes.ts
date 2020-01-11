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
    category: string;
    tags: string[];
    lastUpdated: Date;
}