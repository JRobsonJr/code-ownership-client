/* @flow */

import React from 'react';

import { Grid, Paper, Typography, Avatar, Chip, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Student } from '../../api/models';

const styles = {
    bigAvatar: {
        width: 200,
        height: 200,
    },
    paper: {
        padding: 20,
    },
    githubButton: {
        marginTop: 20,
    },
};

type Props = {
    student: Student;
    classes: any,
}

const StudentInfo = ({ student, classes }: Props) => (
    <Grid item xs={8} xl={12} align="center">
        <Paper className={classes.paper} elevation={3}>
            <Grid item xs={12} align="center">
                <Avatar src={student.image} className={classes.bigAvatar} />
            </Grid>
            <Typography variant="display3" align="center" color="textPrimary">
                {student.name}
            </Typography>
            <Typography variant="title" align="center" color="textPrimary">
                {`Also known as: ${student.aliases.join(', ')}`}
            </Typography>
            <Button
              className={classes.githubButton}
              variant="outlined"
              target="__blank"
              href={`https://github.com/${student.githubHandle}`}
            >
                GitHub
            </Button>
        </Paper>
    </Grid>
);

export default withStyles(styles)(StudentInfo);
