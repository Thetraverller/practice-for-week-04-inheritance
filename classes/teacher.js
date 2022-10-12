const Person = require('./person');

// Your code here

class Teacher extends Person {
  constructor(firstName, lastName, subject, yearsOfExperience ){
    super(firstName, lastName)
    this.subject = subject
    this.yearsOfExperience = yearsOfExperience
  }

  static combinedYearsOfExperience(teachers) {
      let total = 0                      //reduce method also works by iterating through  each el in array
      teachers.forEach(teacher => {      // and returning a calculated value in one go
        total += teacher.yearsOfExperience
      });
      return total
  }

}



const teacher1 = new Teacher("susan", "jones", "biology", 5);
const teacher2 = new Teacher("bobby", "roberts", "math", 15);
console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
