const Pokemon = require('./Pokemon')


class Kevin_Pokemon extends Pokemon{
    constructor(name, number, type, hp, baseHp){
      super(name, number, type, hp, baseHp)
        this.name = name
        this.number = number
        this.type = type
        this.hp = hp
        this.basehp = baseHp
    }

    shadowBall(pokemon){
        return Kevin_Pokemon.attack(pokemon, 'Shadow Ball', 80)
      }

    psychic(pokemon){
        return Kevin_Pokemon.attack(pokemon, 'Psychic', 90);
      }

    thunderPunch(pokemon){
        return Kevin_Pokemon.attack(pokemon, 'Thunder Punch', 75)
      }

     energyBall(pokemon){
        return Kevin_Pokemon.attack(pokemon, 'Energy Ball', 90);
     }
  }

//Kevin's Pokemon
Gengar = new Kevin_Pokemon('Gengar', 94, 'Ghost|Poison', 170, 170);
// Charizard = new Kevin_Pokemon('Charizard', 6, 'Fire|Flying', 150, 150);
// Lapras = new Kevin_Pokemon('Lapras', 131, 'Water|Ice', 160, 160);
// Machamp = new Kevin_Pokemon('Machamp', 68, 'Fighting', 180, 180);
// Rhydon = new Kevin_Pokemon('Rhydon', 112, 'Ground|Rock', 180, 180);
// Persian = new Kevin_Pokemon('Persian', 53, 'Normal', 140, 140);


module.exports = Kevin_Pokemon