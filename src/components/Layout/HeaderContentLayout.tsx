import React from 'react';
import InViewAnimation from '../InViewAnimation';

interface IHeaderContentLayoutProps {
    title: string;
    id?: string;
    isDark?: boolean;
    children: JSX.Element;
}

const HeaderContentLayout = ({ title, id, isDark = false, children }: IHeaderContentLayoutProps) => (
    <InViewAnimation className={isDark ? "dark-section" : ""}>
        <div className="container">
            <div className="page-header">
                <h1 id={id}>{title}</h1>
            </div>

            {children}
        </div>
    </InViewAnimation>
);

export default HeaderContentLayout;