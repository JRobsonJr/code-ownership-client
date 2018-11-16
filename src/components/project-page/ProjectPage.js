/* @flow */

import React, { Component } from 'react';
import { Grid, withStyles } from '@material-ui/core';

import ProjectNameGrid from './ProjectNameGrid';
import StudentList from './StudentList';
import ArtifactList from './ArtifactList';

import { getProjectName, getStudents, getArtifacts } from '../../api/mock-api';
import { Student, Artifact } from '../../api/models';

type Props = {
    classes: any,
}

type State = {
    projectName: string,
    students: Array<Student>,
    artifacts: Array<Artifact>,
};

const styles = theme => ({
    root: {
        padding: theme.spacing.unit,
    },
});

class ProjectPage extends Component<Props, State> {
    constructor() {
        super();

        this.state = {
            projectName: getProjectName(),
            students: getStudents(),
            artifacts: getArtifacts(),
        };
    }

    render() {
        const { classes } = this.props;
        const { projectName, students, artifacts } = this.state;

        return (
            <div className={classes.root}>
                <Grid
                  container
                  spacing={16}
                  alignItems="center"
                  direction="row"
                  justify="center"
                >
                    <ProjectNameGrid projectName={projectName} />
                    <StudentList students={students} />
                    <ArtifactList artifacts={artifacts} />
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ProjectPage);
