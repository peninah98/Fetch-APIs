const promiseOne = () => new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Promise 1 resolved')
        reject('Promise 1 rejected')
    }, 200);
})

const promiseTwo = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
      reject("Promise 2 rejected");
    }, 200);
});

const promiseThree = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
      reject("Promise 3 rejected");
    }, 200);
});


const throwErrorAfterLongTime = () => new Promise((_,reject)=>{
    setTimeout(() => {
        reject('OOps not your problem its dam API')
    }, 500);
})