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
    const path = artifact.path
        .map(path => <Chip variant="outlined" label={path} />);

    return (
        <ListItem>
            <ListItemText primary={path}/>
        </ListItem>
    );
};

export default ArtifactListItem;
