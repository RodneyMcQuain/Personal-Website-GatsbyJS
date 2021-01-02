import React from 'react';
import { FaGraduationCap } from '@meronex/icons/fa';
import { RiFilePaper2Line } from '@meronex/icons/ri';
import HoverIconText from '../../Shared/HoverIconText';
import { GoLocation } from '@meronex/icons/go';
import ImageTopCard from '../../Shared/ImageTopCard';
import styles from '../../../styles/layout/components/HomePage/Education/Institution.module.scss';
const { institutionName, institutionDescription } = styles;

const Institution = ({ institution: { institution, location, degree, graduationDate, gpa, image } }) => (
    <ImageTopCard
        image={image.childImageSharp.fluid}
        imageAltText={institution}
        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-container upscale-container"
    >
        <h2 className={institutionName}>
            {institution} - <HoverIconText
                icon={<GoLocation />}
                displayText={location}
                altText={`Location: ${location}`}
                className="-small-text -gray-text"
            />
        </h2>
        <p className={institutionDescription}>
            <HoverIconText
                icon={<FaGraduationCap />}
                displayText={graduationDate}
                altText={`Graduation Date: ${graduationDate}`}
                className="-gray-text -small-text"
            />
        </p>
        <p className={`${institutionDescription} -secondary-text`}>
            <HoverIconText
                icon={<RiFilePaper2Line />}
                displayText={degree}
                altText={`Diploma: ${degree}`}
                className="-secondary-text"
            /> (GPA: {gpa})
        </p>
    </ImageTopCard>
);

export default Institution;