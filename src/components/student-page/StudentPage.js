/* @flow */

import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import StudentInfo from './StudentInfo';
import StudentArtifacts from './StudentArtifacts';

import { getArtifacts } from '../../api/mock-api';
import { Artifact } from '../../api/models';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
    },
});

type Props = {
    classes: any;
};

type State = {
    studentName: string;
    studentPicture: string;
    studentArtifacts: Artifact[];
};

class StudentPage extends Component<Props, State> {
    constructor() {
        super();

        this.state = {
            studentName: 'David',
            studentPicture: 'https://goo.gl/9b23Uw',
            studentArtifacts: getArtifacts(),
        };
    }

    render() {
        const { classes } = this.props;
        const { studentName, studentPicture, studentArtifacts } = this.state;

        return (
            <div className={classes.root}>
                <Grid
                  container
                  spacing={16}
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                    <StudentInfo studentName = {studentName} studentPicture = {studentPicture}/>
                    <StudentArtifacts artifacts = {studentArtifacts} />

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(StudentPage);
