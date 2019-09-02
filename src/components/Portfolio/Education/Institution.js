import React from 'react';
import Img from "gatsby-image";

const Institution = ({institution}) => (
    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-container upscale-container">
        <div className="-curved-border">
            <Img fluid={institution.image.childImageSharp.fluid} className="container-top-image" alt={institution.institution} />
            <div className="padding-container">
                <h2 className="education-institution">{institution.institution}</h2>
                <p>{institution.location}</p>
                <p>{institution.degree}</p>
                <p>{institution.graduationDate}</p>
                <p>GPA: {institution.gpa}</p>
            </div>
        </div>
    </div>
);

export default Institution;