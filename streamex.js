const num=[1,2,3,4,5,6,7,80];
const c=num.filter((n)=>(n>5));
console.log(c);

const d=num.map((n)=>(n*2));
console.log(d);
const e=num.filter((n)=>(n%2==0)).map((n)=>(n*2)).reduce((n,s)=>(n+s));
console.log(e);