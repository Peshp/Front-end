function createPerson(firstName, lastName, age){
    return {
        firstName,
        lastName,
        age,
        printPerson: function(){
            console.log(`firstname: ${firstName}\nlastName: ${lastName}\nage: ${age}`);
        }
    }
}

const  person = createPerson("Peter", "Pan", "20");
person.printPerson();