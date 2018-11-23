/* @flow */

import React from 'react';

import EntityList from '../project-page/EntityList';
import ArtifactListItem from '../student-page/ArtifactListItem';

import { Artifact } from '../../api/models';

type Props = {
    artifacts: Array<Artifact>,
};

const StudentArtifacts = ({ artifacts }: Props) => {
    const artifactListItem = artifacts
        .map(artifact => <ArtifactListItem artifact={artifact} />);

    return (
        <EntityList title="CLASSES">
            {artifactListItem}
        </EntityList>
    );
};

export default StudentArtifacts;
