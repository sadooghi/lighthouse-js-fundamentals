function ageCalculator(name, yearOfBirth, currentYear) {
  if (typeof name === 'string') {
    if (typeof yearOfBirth === 'number') {
      if (typeof currentYear === 'number') {
        var age = currentYear - yearOfBirth;
      }
      else {  
        return "currentYear is not valid."
      }
    }
    else {
      return "yearOfBirth is not valid."
    }
  }
  else {
    return "name is not valid."
  }
  if (currentYear >= yearOfBirth) {
    return name + " is " + age + " years old.";	
  }
  else {
    return "currentYear should be more than or equal yearOfBirth."
  }
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));