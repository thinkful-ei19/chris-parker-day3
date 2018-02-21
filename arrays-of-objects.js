let person1 = {
    name: 'John',
    jobTitle: 'Scientist',
}

let person2 = {
    name: 'Jack',
    jobTitle: 'Bartender',
}

let person3 = {
    name: 'Ann',
    jobTitle: 'Nurse',
}

let array = [person1, person2, person3];

for (i = 0; i < array.length; i++){
    console.log(`${array[i].name}: ${array[i].jobTitle}`)
}