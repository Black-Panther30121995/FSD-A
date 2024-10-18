let arr = [2, 3, 6, 7, 9];
/*
let newArr=arr.map((x)=>x**2);
console.log(newArr);
*/
/*
let newArr=arr.filter((x)=>x%2==0);
console.log(newArr);
*/
/*
let newArr=arr.filter((x)=>x%2==0).map((x)=>{ return x*2});
console.log(newArr);
let newArr1=arr.reduce((x,y)=> x+y,0);
console.log(newArr1);

let newArr2=arr.map((x)=>x**2).filter((x)=>x%2==0).reduce((x,y)=> x+y,0);
console.log(newArr2);
*/

let students=[
    {
        name:'Alice',
        score:50
    },
    {
        name:'Swarna',
        score:80
    },
    {
        name:'Ben',
        score:60
    },
    {
        name:'Katty',
        score:80
    }
]

let st=students.filter((x)=>x.score>75).map((x)=>x.score*2).reduce((x,y)=>x+y,0);
console.log(st);

