/* @flow */

import React from 'react';
import { Grid, Paper, Typography, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    bigAvatar: {
        width: 80,
        height: 80,
        marginTop: 16,
    },
    paper: {
        paddingTop: 1,
    }
};

type Props = {
    studentName: string,
    studentPicture: string,
    classes: any,
}

const StudentInfo = ({ studentName, studentPicture, classes }: Props) => (
    <Grid item xs={5} xl={12}>
        <Paper elevation={3}>
            <Grid item xs={12}  align="center" className={classes.paper}>
                <Avatar src={studentPicture} className={classes.bigAvatar}/>

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

<<<<<<< HEAD
export default withStyles(styles)(StudentInfo);
=======
export default StudentInfo;
>>>>>>> 9f7949afbfce55f437ef3cd16b7303a2269efdef
