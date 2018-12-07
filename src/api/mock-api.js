/* @flow */

import { Student, Artifact, Contribution } from './models';

export const getProjectName = () => 'homemade-dynamite';

export const getStudents = () => {
    const david = new Student('David', 'https://goo.gl/9b23Uw', 'davidedup');
    david.addAlias('davidedup');
    david.addAlias('DAVID EDUARDO PEREIRA 116110000');

    const robson = new Student('Robson', 'https://goo.gl/aEPtCY', 'jrobsonjr');
    robson.addAlias('JRobsonJr');
    robson.addAlias('SoftCircuits');

    const mariana =
        new Student('Mariana', 'https://goo.gl/JSHM33', 'mariana-mendes');
    mariana.addAlias('mariana-mendes');
    mariana.addAlias('Mariana e Silva');

    const matheus =
        new Student('Matheus', 'https://goo.gl/2vQ12L', 'matheusgr');
    matheus.addAlias('matheusgr');

    return [david, robson, mariana, matheus];
};

export const getStudent = (index: number) => getStudents()[index];

export const getArtifacts = () => [
    new Artifact('src/main/Main.java', ['Arquivos', 'Exception']),
    new Artifact('src/genre/Genre.java', ['Herança', 'Interface']),
    new Artifact('src/genre/Pop.java', ['Teste']),
];

export const getStudentContributions = (index: number) => {
    console.log(getStudent(index));
    const artifacts = getArtifacts();

    return [
        new Contribution(artifacts[0], 0.90),
        new Contribution(artifacts[1], 0.45),
        new Contribution(artifacts[2], 0),
    ];
};
