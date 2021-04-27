import React from 'react';
import Link from 'gatsby-link';
import Icon from '../../Shared/Icon';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from '@meronex/icons/fa';
import SingleWhiteSpace from '../../Shared/SingleWhiteSpace';
import { adjacentNavigationContainer, adjacentNavigation, previous as previousClass, next as nextClass } from '../../../styles/layout/components/Blog/Post/AdjacentPostNavigation.module.scss';

const AdjacentPostNavigation = ({ previous, next }) => (
    <nav className={adjacentNavigationContainer}>
        {
            next 
                ? (
                    <Link className={nextClass} to={next.path}>
                        <div id="next-post" className="-small-text -gray-text">Next Post</div>
                        <div className={adjacentNavigation} aria-labelledby="next-post">
                            <div><Icon icon={<FaLongArrowAltLeft />} /></div> 
                            <SingleWhiteSpace /><div>{next.title}</div>
                        </div>
                    </Link>
                ) 
                : <EmptyDiv />
        }
        {
            previous 
                ? (
                    <Link className={previousClass} to={previous.path}>
                        <div id="previous-post" className="-small-text -gray-text">Previous Post</div>
                        <div className={adjacentNavigation} aria-labelledby="previous-post">
                            <div>{previous.title}</div> 
                            <SingleWhiteSpace /><div><Icon icon={<FaLongArrowAltRight />} /></div>
                        </div>
                    </Link> 
                )
                : <EmptyDiv />
        }
    </nav>
);

const EmptyDiv = () => <div aria-hidden="true"></div>;

export default AdjacentPostNavigation;