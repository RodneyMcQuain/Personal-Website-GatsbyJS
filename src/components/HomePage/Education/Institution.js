import React from 'react';
import HoverIconText from '../../Shared/HoverIconText';
import IconText from '../../Shared/IconText';
import ImageTopCard from '../../Shared/ImageTopCard';
import { FaGraduationCap } from '@meronex/icons/fa';
import { RiFilePaper2Line } from '@meronex/icons/ri';
import { BisCalculator } from '@meronex/icons/bi';
import { GoLocation } from '@meronex/icons/go';
import { institutionName, institutionDescription, spaced, defaultMarginBottom } from '../../../styles/layout/components/HomePage/Education/Institution.module.scss';

const Institution = ({ institution: { institution, location, degree, minor, concentration, graduationDate, gpa, image } }) => (
    <ImageTopCard
        image={image.childImageSharp.fluid}
        imageAltText={institution}
        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-container upscale-container"
    >
        <span className={spaced}>
            <h2 className={`${institutionName}`}>{institution}</h2>
            <HoverIconText
                icon={<GoLocation />}
                displayText={location}
                altText={`Location: ${location}`}
                className="-small-text -gray-text"
            />
        </span>
        <p className={`${institutionDescription} ${defaultMarginBottom}`}>
            <HoverIconText
                icon={<FaGraduationCap />}
                displayText={`${graduationDate}`}
                altText={`Graduation Date: ${graduationDate}`}
                className="-gray-text -small-text"
            /> 
        </p>
        <p className={`${institutionDescription} ${spaced} -secondary-text`}>
            <HoverIconText
                icon={<RiFilePaper2Line />}
                displayText={degree}
                altText={`Diploma: ${degree}`}
                className="-secondary-text"
            /> 
            {concentration && 
                <span className={`-small-text -gray-text`}>
                    Concentration on {concentration}
                </span>
            }
        </p>
        {minor && 
            <p className={`${institutionDescription} -secondary-text`}>
                <span className="-small-text -gray-text">
                    <IconText
                        icon={<RiFilePaper2Line />}
                        text={`Minor in ${minor}`}
                    />
                </span>
            </p>
        }
        <p className={`${institutionDescription} -secondary-text`}>
            <IconText
                icon={<BisCalculator />}
                text={`${gpa} GPA`}
                className="-secondary-text"
            />
        </p>
    </ImageTopCard>
);

export default Institution;