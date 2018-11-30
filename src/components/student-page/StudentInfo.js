/* @flow */

import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { Student } from '../../api/models';

const styles = {
    bigAvatar: {
        width: 80,
        height: 80,
        marginTop: 16,
    },
    paper: {
        paddingTop: 1,
    },
};

type Props = {
    student: Student;
    classes: any,
}

const StudentInfo = ({ student, classes }: Props) => (
    <Grid item xs={5} xl={12}>
        <Paper elevation={3}>
            <Grid item xs={12} align="center" className={classes.paper}>
                <Avatar src={student.image} className={classes.bigAvatar} />
            </Grid>
            <Typography
              variant="display3"
              align="center"
              color="textPrimary"
            >
                {student.name}
            </Typography>
        </Paper>
    </Grid>
);

export default withStyles(styles)(StudentInfo);
