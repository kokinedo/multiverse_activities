const Pokemon = require('./Pokemon')


class Ayden_Pokemon extends Pokemon{
    constructor(name, number, type, hp, baseHp){
      super(name, number, type, hp, baseHp)
        this.name = name
        this.number = number
        this.type = type
        this.hp = hp
        this.basehp = baseHp
    }

    vineWhip(pokemon){
        return Ayden_Pokemon.attack(pokemon, 'Vine Whip', 80)
      }

    energyBall(pokemon){
        return Ayden_Pokemon.attack(pokemon, 'Energy Ball', 90);
      }

    sludgeBall(pokemon){
        return Ayden_Pokemon.attack(pokemon, 'Sludge Ball', 75)
      }

     poisonJab(pokemon){
        return Ayden_Pokemon.attack(pokemon, 'Poison Jab', 90);
     }
  }

//Ayden's Pokemon
Victreebel = new Ayden_Pokemon('Victreebel', 71, 'Grass|Poison', 160, 160);
// Blatoise = new Ayden_Pokemon('Blatoise', 94, 'Water', 120, 120);
// Ninetales = new Ayden_Pokemon('Charizard', 6, 'Fire|Flying', 150, 150);
// Aerodactyl = new Ayden_Pokemon('Lapras', 131, 'Water|Ice', 160, 160);
// Alakazam = new Ayden_Pokemon('Machamp', 68, 'Fighting', 180, 180);
// Jolteon = new Ayden_Pokemon('Rhydon', 112, 'Ground|Rock', 180, 180);



module.exports = Ayden_Pokemon