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
<<<<<<< HEAD
        <StudentPage />
        {/* <ProjectPage /> */}
=======
        <MainContent />
>>>>>>> 9f7949afbfce55f437ef3cd16b7303a2269efdef
    </MuiThemeProvider>
);

export default App;
