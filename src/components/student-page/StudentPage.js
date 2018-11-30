/* @flow */

import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import StudentInfo from './StudentInfo';
import StudentArtifacts from './StudentArtifacts';

import { getStudent, getArtifacts } from '../../api/mock-api';
import { Student, Artifact } from '../../api/models';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
    },
});

type Props = {
    classes: any;
    match: any;
};

type State = {
    student: Student;
    studentContributions: Artifact[]; // Change
};

class StudentPage extends Component<Props, State> {
    constructor(props) {
        super(props);

        const studentId = this.props.match.params.id;
        this.state = {
            student: getStudent(studentId),
            studentContributions: getArtifacts()
        };
    }

    render() {
        const { classes } = this.props;
        const { student } = this.state;

        return (
            <div className={classes.root}>
                <Grid
                  container
                  spacing={16}
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                    <StudentInfo student={student} />
                    <StudentArtifacts artifacts={studentContributions} />
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(StudentPage);
