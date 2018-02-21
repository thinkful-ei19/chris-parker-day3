function findById(items, idNum) 
 for(let i = 0; i < items.length; i++) {
      if(items[i].id === idNum) {
           return items[i]; 
        } 
    } 
}