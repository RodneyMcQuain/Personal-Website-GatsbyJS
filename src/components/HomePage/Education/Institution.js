import React from 'react';
import HoverIconText from '../../Shared/HoverIconText';
import IconText from '../../Shared/IconText';
import ImageTopCard from '../../Shared/ImageTopCard';
import { FaGraduationCap, FaStar } from '@meronex/icons/fa';
import { RiFilePaper2Line } from '@meronex/icons/ri';
import { BisCalculator } from '@meronex/icons/bi';
import { GoLocation } from '@meronex/icons/go';
import { institutionName, institutionDescription, spaced, defaultMarginBottom, accomplishment as accomplishmentClass } from '../../../styles/layout/components/HomePage/Education/Institution.module.scss';

const Institution = ({ institution: { institution, location, degree, minor, concentration, graduationDate, gpa, gpaNote, image, accomplishment } }) => (
    <ImageTopCard
        image={image.childImageSharp.fluid}
        imageAltText={institution}
        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin-container upscale-container"
    >
        <span className={spaced}>
            <h2 className={institutionName}>{institution}</h2>
            <HoverIconText
                icon={<GoLocation />}
                displayText={location}
                altText={`Location: ${location}`}
                className="-small-text -gray-text"
            />
        </span>
        <p className={`${institutionDescription} ${defaultMarginBottom}`}>
            <span className="-gray-text -small-text">
                <IconText
                    icon={<FaGraduationCap />}
                    text={`Graduated ${graduationDate}`}
                /> 
            </span>
        </p>
        <p className={`${institutionDescription} ${spaced}`}>
            <HoverIconText
                icon={<RiFilePaper2Line />}
                displayText={degree}
                altText={`Diploma: ${degree}`}
                className="-secondary-text"
            /> 
            {concentration && <span className="-small-text -gray-text">Concentration on {concentration}</span>}
        </p>
        {minor && 
            <p className={institutionDescription}>
                <span className="-small-text -gray-text">
                    <IconText
                        icon={<RiFilePaper2Line />}
                        text={`Minor in ${minor}`}
                    />
                </span>
            </p>
        }
        <p className={`${institutionDescription} ${spaced}`}>
            <span className="-secondary-text">
                <IconText
                    icon={<BisCalculator />}
                    text={`${gpa} GPA`}
                />
            </span>
            {gpaNote && <span className="-small-text -gray-text">{gpaNote}</span>}
        </p>
        {accomplishment &&
            <p className={accomplishmentClass}>
                <IconText icon={<FaStar />} text={accomplishment.mainNote} />
                <ul>{accomplishment.subNotes.map(n => <li>{n}</li>)}</ul>
            </p>    
        }
    </ImageTopCard>
);

export default Institution;