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
        Kevin_Pokemon.attack(pokemon, 'Shadow Ball', 80)
      }

    psychic(pokemon){
        Kevin_Pokemon.attack(pokemon, 'Psychic', 90);
      }

    thunderPunch(pokemon){
        Kevin_Pokemon.attack(pokemon, 'Thunder Punch', 75)
      }

     energyBall(pokemon){
        Kevin_Pokemon.attack(pokemon, 'Energy Ball', 90);
     }
  }

//Kevin's Pokemon
Persian = new Kevin_Pokemon('Persian', 53, 'Normal', 140, 140);
Gengar = new Kevin_Pokemon('Gengar', 94, 'Ghost|Poison', 120, 120);
Charizard = new Kevin_Pokemon('Charizard', 6, 'Fire|Flying', 150, 150);
Lapras = new Kevin_Pokemon('Lapras', 131, 'Water|Ice', 160, 160);
Machamp = new Kevin_Pokemon('Machamp', 68, 'Fighting', 180, 180);
Rhydon = new Kevin_Pokemon('Rhydon', 112, 'Ground|Rock', 180, 180);

// test = new Kevin_Pokemon('test', 53, 'Normal', 140, 140);
// test1 = new Kevin_Pokemon('Gengar', 94, 'Ghost|Poison', 120, 120);
// test2 = new Kevin_Pokemon('Charizard', 6, 'Fire|Flying', 150, 150);
// test3 = new Kevin_Pokemon('Lapras', 131, 'Water|Ice', 160, 160);
// test4 = new Kevin_Pokemon('Machamp', 68, 'Fighting', 180, 180);
// test5 = new Kevin_Pokemon('Rhydon', 112, 'Ground|Rock', 180, 180);


module.exports = Kevin_Pokemon