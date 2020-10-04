import React from 'react';
import Img from "gatsby-image";
import { FaGraduationCap } from 'react-icons/fa';
import { RiFilePaper2Line } from 'react-icons/ri';
import HoverIconText from '../../Shared/HoverIconText';
import { GoLocation } from 'react-icons/go';

const Institution = ({ institution: { institution, location, degree, graduationDate, gpa, image } }) => (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-container upscale-container">
        <div className="-curved-border -layered-box-shadow">
            <Img fluid={image.childImageSharp.fluid} className="container-top-image" alt={institution} />
            <div className="padding-container">
                <h2 className="education-institution">
                    {institution} - <HoverIconText
                                        icon={<GoLocation />}
                                        displayText={location}
                                        altText={`Location: ${location}`}
                                        className="-small-text -gray-text"
                                    />
                </h2>
                <p className="education-description">
                    <HoverIconText
                        icon={<FaGraduationCap />}
                        displayText={graduationDate}
                        altText={`Graduation Date: ${graduationDate}`}
                        className="-gray-text -small-text -left-align"
                    />
                </p>
                <p className="education-description -secondary-text">
                    <HoverIconText
                        icon={<RiFilePaper2Line />}
                        displayText={degree}
                        altText={`Diploma: ${degree}`}
                        className="-secondary-text -left-align"
                    /> (GPA: {gpa})
                </p>
            </div>
        </div>
    </div>
);

export default Institution;