/* @flow */

import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import StudentList from './StudentList';
import ArtifactList from './ArtifactList';

import { getStudents, getArtifacts } from '../../api/mock-api';
import { Student, Artifact } from '../../api/models';

type State = {
    students: Array<Student>,
    artifacts: Array<Artifact>;
};

class ProjectPage extends Component<{}, State> {
    constructor() {
        super();

        this.state = {
            students: getStudents(),
            artifacts: getArtifacts(),
        };
    }

    render() {
        const { students, artifacts } = this.state;

        return (
            <Grid
              container
              justify="center"
            >
                <StudentList students={students} />
                <ArtifactList artifacts={artifacts} />
            </Grid>
        );
    }
}

export default ProjectPage;
