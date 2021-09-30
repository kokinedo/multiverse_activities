const Kevin_Pokemon = require('./Kevin_Pokemon')
const Ayden_Pokemon = require('./Ayden_Pokemon')
const Rassheika_Pokemon = require('./Rasheika_Pokemon')

class Battle extends Kevin_Pokemon{
    constructor(name, number, type, hp, base, baseHp){
        super(name, number, type, hp, baseHp)
            this.name = name
            this.number = number
            this.type = type
            this.hp = hp
            this.baseHp   
    }


}

//Battle!
console.log(Gengar.shadowBall(Dragonite));
console.log(Dragonite.outRage(Gengar));
