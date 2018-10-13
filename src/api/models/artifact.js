/* @flow */

class Artifact {
    path: string;
    expertises: Array<string>;

    constructor(path: string, expertises: Array<string>) {
        this.path = path;
        this.expertises = [];
    }

}

export default Artifact;
