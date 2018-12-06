/* @flow */

import React from 'react';

import StudentListItem from './StudentListItem';
import EntityList from '../common/EntityList';

import { Student } from '../../api/models';

type Props = {
    students: Array<Student>,
};

const StudentList = ({ students }: Props) => {
    const studentListItems = students
        .map(student => <StudentListItem student={student} />);

    return (
        <EntityList title="STUDENTS">
            {studentListItems}
        </EntityList>
    );
};

export default StudentList;
