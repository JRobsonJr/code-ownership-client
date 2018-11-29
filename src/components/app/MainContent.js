import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProjectPage from '../project-page/ProjectPage';
import StudentPage from '../student-page/StudentPage';

const MainContent = () => (
    <Switch>
        <Route exact path="/project/:id" component={ProjectPage} />
        <Route exact path="/project/:id/student/:id" component={StudentPage} />
    </Switch>
);

export default MainContent;
