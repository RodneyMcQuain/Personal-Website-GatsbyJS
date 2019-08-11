import React from 'react';
import Institution from './Institution';
import institutions from '../../data/institutions';
import InViewAnimation from '../InViewAnimation';

const Education = () => (
    <InViewAnimation>
        <div className="dark-section">
            <div className="container">
                <div className="page-header">
                    <h1><span id="education"></span>Education</h1>
                </div>

                {institutions.map(institution => <Institution key={institution} institution={institution} />)}
            </div>
        </div>
    </InViewAnimation>
);

export default Education;