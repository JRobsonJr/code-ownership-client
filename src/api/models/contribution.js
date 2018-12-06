/* @flow */

import Artifact from './artifact';

class Contribution {
    artifact: Artifact;
    ownership: number;

    constructor(artifact: Artifact, ownership: number) {
        this.artifact = artifact;
        this.ownership = ownership;
    }
}

export default Contribution;
