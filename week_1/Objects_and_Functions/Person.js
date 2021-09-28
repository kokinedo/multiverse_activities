//Initialize constructor
class Person {
    constructor(name) {
        this.name = name;
        this.parent = [];
    }

    childOf() {
        if(this.parent.length > 0){
            let newParent = this.parent.map(parent => parent.name);
            return newParent[0] + ' & ' + newParent[1];
        }else{
            return 'Unknown'
        }
    }

    addParent(parent) {
        this.parent.push(parent);
    }
}
//Add more parents + childrecd .e')

//First Generation
let George4 = new Person('King George VI');
let Elizabeth = new Person('Queen Elizabeth');


//Second Generation
let Phillip = new Person('Prince Phillip');
let Elizabeth2 = new Person('Queen Elizabeth II');
let Margaret = new Person('Princess Margaret');

//Add parents
Elizabeth2.addParent(George4);
Elizabeth2.addParent(Elizabeth);
Margaret.addParent(George4);
Margaret.addParent(Elizabeth);

//Third Generation
let Camila = new Person('Camila');
let Charles = new Person('Charles');
let Diana = new Person('Diana');
let Anne = new Person('Anne');
let Andrew = new Person('Prince Andrew');
let Edward = new Person('Prince Edward');

//Add parents
Charles.addParent(Phillip);
Charles.addParent(Elizabeth2)
Anne.addParent(Phillip);
Anne.addParent(Elizabeth2)
Andrew.addParent(Phillip);
Andrew.addParent(Elizabeth2)
Edward.addParent(Phillip);
Edward.addParent(Elizabeth2)

//Fourth Generation
let Catherine = new Person('Catherine');
let William = new Person('William');
let Harry = new Person('Prince Harry');
let Meghan = new Person('Meghan');

//Add parents
William.addParent(Charles);
William.addParent(Diana);
Harry.addParent(Charles);
Harry.addParent(Diana);

//Fifth Generation
let BabyGeorge = new Person('Prince George of Cambridge');
let BabyCharlotte = new Person('Prince Charlotte of Cambridge');
let BabyLouis = new Person('Prince Louis of Cambridge');
let BabyArchie = new Person('Archie Harrison Mountbatten-Windsor');

//Add parents
BabyArchie.addParent(Harry);
BabyArchie.addParent(Meghan);
BabyGeorge.addParent(William);
BabyGeorge.addParent(Catherine);
BabyCharlotte.addParent(Catherine);
BabyCharlotte.addParent(William);
BabyLouis.addParent(Catherine);
BabyLouis.addParent(William);

//Some Examples of the childOf function being used
console.log(William.childOf());
console.log(BabyCharlotte.childOf());
console.log(Elizabeth2.childOf());