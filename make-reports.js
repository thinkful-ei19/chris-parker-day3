function makeStudentsReport(data) {
    let results = [];
    for(let i = 0; i < data.length; i++) {
      results.push(`${data[i].name}: ${data[i].grade}`);
    }
    return results; 
  }