function validateKeys(object, expectedKeys) {
    let keys = Object.keys(object);
    if (Object.keys(object).length !== expectedKeys.length) {
      return false;
    }
    let invalidKey = expectedKeys.find(key => !(key in object));
    if (invalidKey){
      return false;
    }
    return true;
  }