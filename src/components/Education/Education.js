import React from 'react';
import Institution from './Institution';
import institutions from '../../data/institutions';

const Education = () => (
    <section className="dark-section">
        <div className="container">
            <div className="page-header">
                <h1><span id="education"></span>Education</h1>
            </div>

            {institutions.map(institution => <Institution key={institution} institution={institution} />)}
        </div>
    </section>
);

export default Education;