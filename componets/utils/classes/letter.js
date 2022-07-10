class Letter {
    constructor(id, name, backgroundcolor) {
        this.id = id;
        this.name = name;
        this.backgroundcolor = backgroundcolor;
    }

}


const A = new Letter(1, 'A', 'yellow');

console.log(JSON.stringify(A));

module.exports = Letter;