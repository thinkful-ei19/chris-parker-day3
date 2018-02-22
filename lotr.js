'use strict';

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight: function(char){
      let x = Math.abs(this.attack - char.defense);
      let y = Math.abs(this.defense - char.attack);  
      return (this.defense > char.attack) ? 'You take no damage' : `Your opponent takes ${x} damage and you receive ${y} damage`;
          
    }
  }; 
}


const gand = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const ara = createCharacter('Aragon Son', 'aragon', 'Wizard', 'Middle Earth', 6, 8);

console.log(ara.evaluateFight(gand));