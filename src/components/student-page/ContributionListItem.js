/* @flow */

import React from 'react';

import {
    Avatar,
    Chip,
    ListItem,
    ListItemText,
    withStyles,
} from '@material-ui/core';

import { Contribution } from '../../api/models';

const styles = {
    ownership: {
        color: '#fff',
        backgroundColor: '#abc',
    },
};

type Props = {
    classes: any;
    contribution: Contribution;
};

const ContributionListItem = ({ classes, contribution }: Props) => {
    const { artifact, ownership } = contribution;
    const expertiseChips = artifact.expertises
        .map(expertise => <Chip variant="outlined" label={expertise} />);

    return (
        <ListItem>
            <Avatar className={classes.ownership}>{ownership * 100}</Avatar>
            <ListItemText primary={artifact.path} secondary={expertiseChips} />
        </ListItem>
    );
};

export default withStyles(styles)(ContributionListItem);
