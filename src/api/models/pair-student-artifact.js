/* @flow */

import Artifact from './artifact';
import Student from './student';

class PairStudentArtifact {
    student: Student;
    artifact: Artifact;
    ownership: number;

    constructor(student: Student, artifact: Artifact, ownership: number) {
        this.student = student;
        this.artifact = artifact;
        this.ownership = ownership;
    }
}

export default PairStudentArtifact;
