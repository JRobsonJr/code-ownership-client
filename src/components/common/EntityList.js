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

type Props = {
    children: any,
    classes: any,
    title: string,
};

const styles = theme => ({
    title: {
        marginTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit,
    },
});

const EntityList = ({ classes, children, title }: Props) => (
    <Grid item xs={8}>
        <Paper className={classes.paper} elevation={2}>
            <Typography
              align="center"
              className={classes.title}
              variant="title"
            >
                {title}
            </Typography>
            <Divider />
            <List>
                {children}
            </List>
        </Paper>
    </Grid>
);

export default withStyles(styles)(EntityList);
