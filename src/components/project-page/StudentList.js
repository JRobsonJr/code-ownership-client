/* @flow */

import React from 'react';

import {
    Grid,
    Typography,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
} from '@material-ui/core';

type Props = {
    students: Array<any>,
};

const StudentList = ({ students }: Props) => {
    const studentListItems = students
        .map(student => <StudentListItem student={student} />);
    return (
        <Grid item xs={12} md={6}>
            <Typography variant="title">
                Students
            </Typography>
            <div>
                <List>
                    {studentListItems}
                </List>
            </div>
        </Grid>
    );
};

type ListItemProps = {
    student:any,
};

const StudentListItem = ({ student }: ListItemProps) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar src={student.image} />
        </ListItemAvatar>
        <ListItemText primary={student.name} />
    </ListItem>
);

export default StudentList;
