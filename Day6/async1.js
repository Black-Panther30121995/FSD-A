//import { students } from "./script.js";

let sayhello = () => {
  console.log("Hello Function");
};

/*
console.log("start");
//setTimeout(sayhello, 4000);
/*
setTimeout(()=>{
    console.log("first task completed");
    setTimeout(()=>{
        console.log("second task completed");
        setTimeout(()=>{
            console.log("Third task completed");
        },3000)
    },2000)
},5000)
*/
/*
console.log("End");

new Promise((resolve) => {
  setTimeout(() => {
    console.log("first task completed");
    resolve();
  }, 5000);
})
  .then((resolve) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("second task completed");
        resolve();
      }, 3000);
    });
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("third task completed");
        resolve();
      }, 1000);
    });
  });
*/
/*
const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Data Send Sunceessfully");
  } else {
    reject("Data failed to send");
  }
});
myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error Fetching data" + error);
  });
*/
/*
function task(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

task("First task completed", 1000)
  .then(() => task("Second Task is completed", 2000))
  .then(() => {
    task("Third task is complteted", 3000);
  });

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

new Promise((resolve)=>{
  console.log(students);
  resolve(students);
}).then((students)=>{ let st=students.filter((students)=>students.score>55).map((students)=>students.score*2);
  console.log(st);
});