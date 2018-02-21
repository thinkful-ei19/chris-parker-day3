let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}

let message = 'craft block argon meter bells brown croon droop';
let words = message.split(' ');
let decodedWord = [];




words.map(word =>{
let firstLetter = word[0];
let position = cipher[firstLetter];

    if (position){
        decodedWord.push(word[position-1]);
    }
    else {
        decodedWord.push(' ');
    }
})



console.log(decodedWord.join(''));