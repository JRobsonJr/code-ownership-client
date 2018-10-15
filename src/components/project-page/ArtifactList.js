/* @flow */

import React from 'react';

import ArtifactListItem from './ArtifactListItem';
import EntityList from './EntityList';

import { Artifact } from '../../api/models';

type Props = {
    artifacts: Array<Artifact>,
};

const ArtifactList = ({ artifacts }: Props) => {
    const artifactListItems = artifacts
        .map(artifact => <ArtifactListItem artifact={artifact} />);

    return (
        <EntityList title="ARTIFACTS">
            {artifactListItems}
        </EntityList>
    );
};

export default ArtifactList;
