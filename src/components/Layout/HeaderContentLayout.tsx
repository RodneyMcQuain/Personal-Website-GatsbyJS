import React from 'react';
import InViewAnimation from '../Shared/InViewAnimation';
import HeaderTitle from '../Shared/HeaderTitle';
import { AllChildren } from '../../types/AllChildren';

interface IHeaderContentLayoutProps {
    title: string;
    id?: string;
    isDark?: boolean;
    children: AllChildren;
}

const HeaderContentLayout = ({ title, id, isDark = false, children }: IHeaderContentLayoutProps) => (
    <ConditionalDarkContainer isDark={isDark}>
        <InViewAnimation>
            <div className="container">
                <HeaderTitle title={title} id={id} />

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