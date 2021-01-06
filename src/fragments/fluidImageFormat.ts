import { graphql } from 'gatsby'

export const fluidImage = graphql`
    fragment fluidImage on ImageSharpFluid {
        ...GatsbyImageSharpFluid_withWebp
    }
`;