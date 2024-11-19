const mymap=new Map([
    [123,"js"],
    ["key1",2345],
    ["key2",2345.6],
]);
console.log(mymap.get("key2"));
mymap.set(234,893);
console.log(mymap);

const myset=new Set();
myset.add(12);
myset.add(23);
myset.add(34);
myset.add(12);
myset.add(22);
myset.add(23);
console.log(myset)