/* @flow */

class Artifact {
    path: string;
    expertises: Array<string>;

    constructor(path: string, expertises: Array<string>) {
        this.path = path;
        this.expertises = expertises;
    }
    addExpertises(expertise: string) {
        this.expertises.push(expertise);
    }
}

export default Artifact;
