import React from 'react';
import InViewAnimation from '../InViewAnimation';

interface IHeaderContentLayoutProps {
    title: string;
    id?: string;
    isDark?: boolean;
    children: JSX.Element;
}

const HeaderContentLayout = ({ title, id, isDark = false, children }: IHeaderContentLayoutProps) => (
    <ConditionalDarkContainer isDark={isDark}>
        <InViewAnimation>
            <div className="container">
                <header className="page-header">
                    <h1 id={id}>{title}</h1>
                </header>

                {children}
            </div>
        </InViewAnimation>
    </ConditionalDarkContainer>
);

const ConditionalDarkContainer = ({ isDark, children }) => (
    isDark
        ? <div className="dark-section">{children}</div>
        : children
);

export default HeaderContentLayout;