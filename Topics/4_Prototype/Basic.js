let protoRabbit = function (color, word, type) {
    this.color = color;
    this.word = word;
    this.type = type;
};
protoRabbit.prototype.getColor = function () {
    return this.color;
}

protoRabbit.prototype.home = 'outdoor';
protoRabbit.prototype.color = 'yellow';

protoRabbit.prototype.speak = function () {
    console.log(`The ${this.type} rabbit says ${this.word} color ${this.color}`);
}
let killerRabbit = new protoRabbit('grey', 'SKREEEEE!', 'assassin');
killerRabbit.speak();
console.log(killerRabbit.home)
console.log(killerRabbit.color)
console.log(killerRabbit)