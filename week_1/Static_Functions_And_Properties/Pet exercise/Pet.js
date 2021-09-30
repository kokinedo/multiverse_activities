class Pet {
    constructor(name, type){
        this.name = name
        this.type = type
    }

    static typeCheck(type){
        const validPets = ['cat', 'dog', 'bird', 'fish']
        return validPets.includes(type)
    }

    static prefixCheck(){
        if(this.name.split(' ')[0] === 'King'){
            return true
        } else if(this.name.split(' ')[0] === 'Queen'){
            return true
        } else {
            return false
        }
    }

    static captitalizeCheck(){
        return this.name.split(' ')[1].charAt(0) === this.name.split(' ')[1].charAt(0).toUpperCase
    }
}


console.log(Pet.typeCheck('cat'));