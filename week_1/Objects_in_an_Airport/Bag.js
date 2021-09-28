class Bag {
    constructor(weight){
        if(!weight){
            throw new Error('Bag needs a weight!');
        }
        this.weight = weight;
    }

    isOverLimit(){
        if(this.weight > 100){
            return false
        } else {
            return true
        }
    }
}

module.exports = Bag;