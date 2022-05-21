import React from 'react';
import { ABOUT_ME_HASH } from '../../services/homePageHashes';
import HeaderContentLayout from '../Layout/HeaderContentLayout';
import { StaticQuery, graphql } from 'gatsby';
import Link from '../Shared/ExternalLink';
import Figure from '../Shared/Figure';
import { aboutMeContainer, aboutMeImageContainer, image as imageClass, right, left, aboutMeText } from '../../styles/layout/components/HomePage/AboutMe.module.scss';

const AboutMe = ({ data: { currentMe, youngMe } }) => (
    <HeaderContentLayout title="About Me" id={ABOUT_ME_HASH}>
        <div className={aboutMeContainer}>
            <Figure
                fluidImage={currentMe.image.childImageSharp.fluid}
                altText={currentMe.altText}
                className={`${aboutMeImageContainer} ${right}`}
                imageClassName={imageClass}
            >
                Courtesy of <Link href="https://www.facebook.com/tinymeleephotography/" shouldOpenInNewTab>Tiny Melee Photography</Link>
            </Figure>
            <p className={aboutMeText}>
                Hey, what's up? I'm Rodney. I'm a software engineer, fully engrossed in the world of software.
                From full-stack web development to the steel industry to machine learning to the internet of things (IoT) and many other areas—I've worked on a variety of different types and domains of software projects.
                Ultimately, I enjoy solving interesting and difficult problems and software is a phenomenal avenue that enables me to do it!
            </p>
            <Figure
                fluidImage={youngMe.image.childImageSharp.fluid}
                altText={youngMe.altText}
                className={`${aboutMeImageContainer} ${left}`}
                imageClassName={imageClass}
            >
                Ecstatic about my first GameCube
            </Figure>
            <p className={aboutMeText}>
                Ever since I was young I've had a fascination with dissecting software.
                Starting out with spending my free time grinding for optimal play in video games.
                Moving into creating some video game mods in high school.
                Then—on a whim—choosing to study software in undergrad; finding something I really enjoy in the process and graduating at the top of my class.
                Software has even weaseled its ways into my hobbies.
                Alongside improving my soft and software skills, I play competitive <em>Super Smash Bros. Melee</em> semi-professionally.
                I'm ranked 1st in Indiana often and have remained in the top 3 players across the years for the game.
                In short, I love the kind of thinking that software—in all its forms—brings to my life.
            </p>
        </div>
    </HeaderContentLayout>
);

const AboutMeStaticQuery = () => (
    <StaticQuery
        query={graphql`
            query {    
                allAboutMeJson {
                    edges {
                        node {
                            currentMe {
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 500, quality: 100) {
                                            ...fluidImage
                                        }
                                    }
                                }
                                altText
                            }
                            youngMe {
                                image {
                                    childImageSharp {
                                        fluid(maxWidth: 500, quality: 100) {
                                            ...fluidImage
                                        }
                                    }
                                }
                                altText
                            }
                        }
                    }
                }
            }
        `}
        render={data => <AboutMe data={data.allAboutMeJson.edges[0].node} />}
    />
);

export default AboutMeStaticQuery;