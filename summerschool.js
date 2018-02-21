function enrollInSummerSchool(students) {
    let results = [];
    for (let i = 0; i < students.length; i++){
      results.push({
        name: students[i].name,
        status: `In summer school`,
        course: students[i].course,
      });
    }
    return results;
  }