/* @flow */

import { Student, Artifact } from './models';

export const getStudents = () => {
    const david = new Student('David', 'https://goo.gl/9b23Uw');
    david.addAlias('davidedup');
    david.addAlias('DAVID EDUARDO PEREIRA 116110000');

    const robson = new Student('Robson', 'https://goo.gl/aEPtCY');
    robson.addAlias('JRobsonJr');
    robson.addAlias('SoftCircuits');

    const mariana = new Student('Mariana', 'https://goo.gl/JSHM33');
    mariana.addAlias('mariana-mendes');
    mariana.addAlias('Mariana e Silva');

    const matheus = new Student('Matheus', 'https://goo.gl/2vQ12L');
    matheus.addAlias('matheusgr');

    return [david, robson, mariana, matheus];
};

export const getArtifacts = () => [
    new Artifact('src/main/Main.java', ["Arquivos", "Exception"]),
    new Artifact('src/genre/Genre.java', ["Herança", "Interface"]),
    new Artifact('src/genre/Pop.java', ["Teste"]),
];
