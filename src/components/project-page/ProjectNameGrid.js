/* @flow */

import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

type Props = {
    projectName: string,
}

const ProjectNameGrid = ({ projectName }: Props) => (
    <Grid item xs={8}>
        <Paper elevation={3}>
            <Typography
              variant="display3"
              align="center"
              color="textPrimary"
            >
                {`${projectName} overview`}
            </Typography>
        </Paper>
    </Grid>
);

export default ProjectNameGrid;
