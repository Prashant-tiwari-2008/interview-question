------------------------------------------------------

Question1-> 

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange')); //orange


---------------------------------------------------------

Quesion2 -> 

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

console.log(bark) 
function bark(){
	console.log('Woof!');
}


----------------------------------------------------------

Queation3 -> 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Lydia', 'Hallie');
Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName());
//Error

---------------------------------------------------------- 