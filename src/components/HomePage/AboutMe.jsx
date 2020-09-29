import React from 'react';
import '../../styles/layout/_about-me.scss';
import { ABOUT_ME_HASH } from '../../services/homePageHashes';
import HeaderContentLayout from '../Layout/HeaderContentLayout';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const AboutMe = ({ data: { image, altText } }) => {
    return (
    <HeaderContentLayout title="About Me" id={ABOUT_ME_HASH}>
        <Img fluid={image.childImageSharp.fluid} className="about-me-img -layered-box-shadow" alt={altText} />
        <p className="about-me-text">    
            I recently received my AS in software development from Ivy Tech Community College and I currently attend
            Purdue University Fort Wayne, looking to get my BS in computer science with a software engineering focus.
            Countless hours of my time are dedicated to furthering my knowledge of programming and becoming the best
            I can be.  I am highly self-motivated and eager to get employed in a position where I can test my skills
            and further my growth as a software engineer.
        </p>
        <p className="about-me-text">
            Aside from programming I put my time into competitive video games.  Just like programming it requires and improves
            my critical thinking and problem solving skills.  I am currently ranked top 5 in Indiana for
            Super Smash Bros. Melee.  Further, it is something I am very passionate about and is a testament
            to my dedication of being the best that I can be at whatever I put my mind to.
        </p>
    </HeaderContentLayout>
)};

const AboutMeStaticQuery = () => (
    <StaticQuery
        query={graphql`
            query {    
                allAboutMeJson {
                    edges {
                        node {
                            image {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            altText
                        }
                    }
                }
            }
        `}
        render={data => <AboutMe data={data.allAboutMeJson.edges[0].node} />}
    />
);

export default AboutMeStaticQuery;