class User {
    constructor(username, password, email, age){
        this.username = username
        this.password = password
        this.email = email
        this.age = age
        this.favTech = []
    }

     checkAge(user) {
        let age = user.age;
        if (age >= 18 && age < 75) {
            return true;
        } else {
            return false;
        }
    }

    addTech(technology) {
        this.favTech.push(technology)
    }

    validateEmail(email){
        this.email.split('@').pop == 'gmail.com' ? true : false
    }
}



//Test that data types are correct

//Tests to make sure that our methods are returning the correct values


module.exports = User
