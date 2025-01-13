// Basic Syntax
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});
