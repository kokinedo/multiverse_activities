const Pokemon = require('./Pokemon')


class Rasheika_Pokemon extends Pokemon{
    constructor(name, number, type, hp, baseHp){
      super(name, number, type, hp, baseHp)
        this.name = name
        this.number = number
        this.type = type
        this.hp = hp
        this.basehp = baseHp
    }

    outRage(pokemon){
        return Rasheika_Pokemon.attack(pokemon, 'Outrage', 100)
      }

    hurricane(pokemon){
        return Rasheika_Pokemon.attack(pokemon, 'Hurricane', 110);
      }

    thunderPunch(pokemon){
        return Rasheika_Pokemon.attack(pokemon, 'Thunder Punch', 75)
      }

     aquaTail(pokemon){
        return Rasheika_Pokemon.attack(pokemon, 'Aqua Tail', 90);
     }
  }

//Rasheika's Pokemon
Dragonite = new Rasheika_Pokemon('Dragonite', 149, 'Dragon|Flying', 200, 200);
// Gengar = new Rasheika_Pokemon('Gengar', 94, 'Ghost|Poison', 120, 120);
// Charizard = new Rasheika_Pokemon('Charizard', 6, 'Fire|Flying', 150, 150);
// Lapras = new Rasheika_Pokemon('Lapras', 131, 'Water|Ice', 160, 160);
// Machamp = new Rasheika_Pokemon('Machamp', 68, 'Fighting', 180, 180);
// Rhydon = new Rasheika_Pokemon('Rhydon', 112, 'Ground|Rock', 180, 180);



module.exports = Rasheika_Pokemon