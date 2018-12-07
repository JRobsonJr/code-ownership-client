/* @flow */

class Student {
    name: string;
    image: string;
    aliases: Array<string>;
    githubHandle: string;

    constructor(name: string, image: string, githubHandle: string) {
        this.name = name;
        this.image = image;
        this.aliases = [];
        this.githubHandle = githubHandle;
    }

    addAlias(alias: string) {
        this.aliases.push(alias);
    }
}

export default Student;
