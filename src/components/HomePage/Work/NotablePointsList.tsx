import React from 'react';
import { NotablePoints } from './IJob';

interface INotablePointsListProps {
    notablePoints: NotablePoints;
}

const NotablePointsList = ({ notablePoints }: INotablePointsListProps) => (
    <ul>{notablePoints.map(notablePoint => <li className="-secondary-text -left-align">{notablePoint}</li>)}</ul>
);

export default NotablePointsList;