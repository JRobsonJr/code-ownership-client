/* @flow */

import React from 'react';

import {
    Grid,
    Typography,
    List,
    Paper,
    Divider,
    withStyles,
} from '@material-ui/core';

import ArtifactListItem from './ArtifactListItem';

import { Artifact } from '../../api/models';

type Props = {
    artifacts: Array<Artifact>,
};

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit,
        padding: theme.spacing.unit,
    },
});

const ArtifactList = ({ artifacts }: Props) => {
    const artifactListItems = artifacts
        .map(artifact => <ArtifactListItem artifact={artifact} />);

    return (
        <Grid item xs={6}>
            <Paper elevation={2}>
                <Typography
                  variant="title"
                  align="center"
                >
                    ARTIFACT
                </Typography>
                <Divider />
                <List>
                    {artifactListItems}
                </List>
            </Paper>
        </Grid>
    );
};


export default withStyles(styles)(ArtifactList);
