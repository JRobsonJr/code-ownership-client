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

import StudentListItem from './StudentListItem';

import { Student } from '../../api/models';

type Props = {
    students: Array<Student>,
    classes: any,
};

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit,
        padding: theme.spacing.unit,
    },
});

const StudentList = ({ classes, students }: Props) => {
    const studentListItems = students
        .map(student => <StudentListItem student={student} />);

    return (
        <Grid item xs={6}>
            <Paper elevation={2}>
                <Typography
                  className={classes.title}
                  variant="title"
                  align="center"
                >
                    STUDENTS
                </Typography>
                <Divider />
                <List>
                    {studentListItems}
                </List>
            </Paper>
        </Grid>
    );
};

export default withStyles(styles)(StudentList);
