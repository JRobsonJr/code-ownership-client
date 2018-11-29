/* @flow */

import React from 'react';

import {
    CssBaseline,
    createMuiTheme,
    MuiThemeProvider,
} from '@material-ui/core';

import MainContent from './MainContent';

const theme = createMuiTheme({
    palette: {
        background: { default: '#f0f0f0' },
    },
    typography: {
        fontFamily: '"Roboto", sans-serif',
    },
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainContent />
    </MuiThemeProvider>
);

export default App;
