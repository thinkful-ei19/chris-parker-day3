'use strict';

let person1 = {
  name: 'John',
  jobTitle: 'Scientist',
  boss: 'George',
};

let person2 = {
  name: 'Jack',
  jobTitle: 'Bartender',
  boss: 'George',
};

let person3 = {
  name: 'Ann',
  jobTitle: 'Nurse',
  boss: 'George',
};

let person4 = {
  name: 'Bob',
  jobTitle: 'Owner',
};

let array = [person1, person2, person3, person4];

for (let i = 0; i < array.length; i++) {
  if(array[i].boss){
    console.log(`${array[i].jobTitle} ${array[i].name} reports to ${array[i].boss}.`);
  } else {
    console.log(`${array[i].name} doesn't report to anyone.`);
  }
}