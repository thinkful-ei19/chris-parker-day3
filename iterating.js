let obj = {
    foo: '1',
    bar: '2',
    fum: '3',
    quux: '4',
    spam: '5'
};

for (let prop in obj){
    console.log(obj[prop]);
}
for (let prop in obj){
    console.log(prop);
}