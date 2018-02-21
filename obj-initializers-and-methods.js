<<<<<<< HEAD
let loaf = {
    flour: 300,
    water: 210,
    hydration: function(water, flour){
        console.log(this);
        return (this.water / this.flour) * 100;
    }
};

=======
'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration: function(water, flour){
    return (this.water / this.flour) * 100;
  }
};
>>>>>>> 74ed8c4ce3b643eacb8f08ec4892e15da8d340e5
console.log(loaf.flour);
console.log(loaf.water);

console.log(loaf.hydration());
