import React from 'react';

const Section = ({ title, children }) => (
    <section>
        <h1>{title}</h1>
        {children}
    </section>
);

export default Section;
