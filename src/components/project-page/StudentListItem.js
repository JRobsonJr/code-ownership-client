/* @flow */

import React from 'react';

import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Chip,
} from '@material-ui/core';

import { Student } from '../../api/models';

type Props = {
    student: Student,
};

const StudentListItem = ({ student }: Props) => {
    const aliases = student.aliases
        .map(alias => <Chip variant="outlined" label={alias} />);

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar src={student.image} />
            </ListItemAvatar>
            <ListItemText primary={student.name} secondary={aliases} />
        </ListItem>
    );
};

export default StudentListItem;
