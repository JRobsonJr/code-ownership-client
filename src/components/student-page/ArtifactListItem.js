/* @flow */

import React from 'react';

import {
    ListItem,
    ListItemText,
    Chip,
} from '@material-ui/core';

import { Artifact } from '../../api/models';

type Props = {
    artifact: Artifact,
};

const ArtifactListItem = ({ artifact }: Props) => {
    const path = artifact.expertises
        .map(expertise => <Chip variant="outlined" label={expertise} />);

    return (
        <ListItem>
            <ListItemText primary={artifact.path} secondary={path} />
        </ListItem>
    );
};

export default ArtifactListItem;