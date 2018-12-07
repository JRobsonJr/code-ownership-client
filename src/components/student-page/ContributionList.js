/* @flow */

import React from 'react';

import EntityList from '../common/EntityList';
import ContributionListItem from './ContributionListItem';

import { Contribution } from '../../api/models';

type Props = {
    contributions: Array<Contribution>,
};

const StudentContributionList = ({ contributions }: Props) => {
    const contributionList = contributions
        .map(contribution =>
            <ContributionListItem contribution={contribution} />);

    return (
        <EntityList title="CONTRIBUTIONS">
            {contributionList}
        </EntityList>
    );
};

export default StudentContributionList;
