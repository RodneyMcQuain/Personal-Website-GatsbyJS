import React from 'react';
import Link from 'gatsby-link';
import Icon from '../../Icon';

const AdjacentPostNavigation = ({ previous, next }) => (
    <nav className="adjacent-navigation-container">
        {
            next 
                ? (
                    <Link className="next" to={next.path}>
                        <div id="next-post" className="-small-text -gray-text">Next Post</div>
                        <div className="adjacent-navigation" aria-labelledby="next-post">
                            <div><Icon icon="fa fa-long-arrow-left" /></div> 
                            &nbsp;<div>{next.title}</div>
                        </div>
                    </Link>
                ) 
                : <EmptyDiv />
        }
        {
            previous 
                ? (
                    <Link className="previous" to={previous.path}>
                        <div id="previous-post" className="-small-text -gray-text">Previous Post</div>
                        <div className="adjacent-navigation" aria-labelledby="previous-post">
                            <div>{previous.title}</div> 
                            &nbsp;<div><Icon icon="fa fa-long-arrow-right" /></div>
                        </div>
                    </Link> 
                )
                : <EmptyDiv />
        }
    </nav>
);

const EmptyDiv = () => <div aria-hidden="true"></div>;

export default AdjacentPostNavigation;