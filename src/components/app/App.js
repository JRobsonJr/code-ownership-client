/* @flow */

import React from 'react';

import {
    CssBaseline,
    createMuiTheme,
    MuiThemeProvider,
} from '@material-ui/core';

import ProjectPage from '../project-page/ProjectPage';
import StudentPage from '../student-page/StudentPage';

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
        <StudentPage />
    </MuiThemeProvider>
);

export default App;
