import React from 'react';
import { AllChildren } from '../../types/AllChildren';

interface IHeaderTextProps {
    title: string;
    className?: string;
    id?: string;
    isHeaderElement?: boolean;
}

const HeaderTitle = ({ title, className, id, isHeaderElement = true }: IHeaderTextProps) => (
    <HeaderTitleWrapper isHeaderElement={isHeaderElement}>
        <h1 id={id} className={className}>{title}</h1>
    </HeaderTitleWrapper>
);

interface IHeaderTitleWrapper {
    isHeaderElement: boolean;
    children: AllChildren;
}

const headerClassName = "page-header";
const HeaderTitleWrapper = ({ isHeaderElement, children }: IHeaderTitleWrapper) => (
    isHeaderElement
        ? <header className={headerClassName}>{children}</header>
        : <div className={headerClassName}>{children}</div>
);

export default HeaderTitle;