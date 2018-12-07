import React, { Component } from 'react';

import { Tabs, Tab, Grid, Paper } from '@material-ui/core';

type State = {
    analysis: number;
}

class OwnershipAnalysisTabs extends Component<{}, State> {
    constructor() {
        super();
        this.state = {
            analysis: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({ analysis: value });
    }

    render() {
        const { analysis } = this.state;
        return (
            <Grid item xs={8} align="center">
                <Paper elevation={3}>
                    <Tabs
                      centered
                      value={analysis}
                      indicatorColor="primary"
                      textColor="primary"
                      onChange={this.handleChange}
                    >
                        <Tab label="Creation" />
                        <Tab label="LOC" />
                        <Tab label="CoAuthorship" />
                    </Tabs>
                </Paper>
            </Grid>
        );
    }
}

export default OwnershipAnalysisTabs;
