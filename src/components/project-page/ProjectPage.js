/* @flow */

import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import StudentList from './StudentList';

import { getStudents } from '../../api/mock-api';
import { Student } from '../../api/models';

type State = {
    students: Array<Student>,
};

class ProjectPage extends Component<{}, State> {
    constructor() {
        super();

        this.state = {
            students: getStudents(),
        };
    }

    render() {
        const { students } = this.state;

        return (
            <Grid
              container
              justify="center"
            >
                <StudentList students={students} />
            </Grid>
        );
    }
}

export default ProjectPage;
