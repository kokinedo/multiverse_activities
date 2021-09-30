class Pokemon {
    //reveal this last
    static pokemons = []
  
    constructor(name, number, type, hp, baseHp){
      this.name = name
      this.number = number
      this.type = type
      this.hp = hp
      this.baseHp = hp
    }
  
    static nameIsString(name) {
      return (typeof name) === 'string'
    }
  
    static numberIsTypeNumber(number) {
      return (typeof number) === 'number'
    }
  
    static isValidType(type) {
      const elements = ['normal', 
                        'fire', 
                        'water', 
                        'electric', 
                        'grass', 
                        'ice', 
                        'fighting', 
                        'poison', 
                        'ground', 
                        'flying', 
                        'psychic', 
                        'bug', 
                        'rock', 
                        'ghost', 
                        'dragon', 
                        'dark', 
                        'steel', 
                        'fairy'] 

      const twoElements = type.split('|')
      return elements.includes((twoElements[0] && twoElements[1]) || type)
    }
  
    static isValidHp(hp) {
      return (hp >= 50 && hp <= 250) ? true : false
    }
  
  
    //what kind of argument should be passed into this method?\
    static assignType(type) {
        this.type = type
    }

    static assignHealth(hp) {
      this.hp = hp
  }

    static assignBaseHealth(baseHp) {
    this.baseHp = baseHp
  }

    static assignName(name) {
      this.name = name
  }

    static resetHealth(pokemon){
      this.hp = this.baseHp
    }

    static attack(pokemon, moveName, damage){
      const missChance = Math.floor(Math.random() * 100);
        if(missChance < 20){
          return `${moveName} has been used, ${pokemon.name} dodged the attack!`
        } else if(damage > pokemon.hp) {
          pokemon.hp = 0
          return `${moveName} has been used, it's effective, ${pokemon.name} has fainted! You win!`
        } else {
          pokemon.hp = pokemon.hp - damage
          return `${moveName} has been used, it's effective, ${pokemon.name} is at ${pokemon.hp} hit points.`
        }
    }
}
module.exports = Pokemon

