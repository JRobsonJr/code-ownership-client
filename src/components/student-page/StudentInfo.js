/* @flow */

import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core';

type Props = {
    studentName: string,
    studentPicture: string
}

const StudentInfo = ({ studentName, studentPicture }: Props) => (
    <Grid item xs={5} xl={12}>
        <Paper elevation={3}>
            <Grid item xs={12} align="center">
                <Avatar src={studentPicture} />
            </Grid>
            <Typography
              variant="display3"
              align="center"
              color="textPrimary"
            >
                {studentName}
            </Typography>
        </Paper>
    </Grid>
);

export default StudentInfo;
