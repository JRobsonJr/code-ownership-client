/* @flow */

class Student {
    name: string;
    image: string;
    aliases: Array<string>;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
        this.aliases = [];
    }

    addAlias(alias: string) {
        this.aliases.push(alias);
    }
}

export default Student;
