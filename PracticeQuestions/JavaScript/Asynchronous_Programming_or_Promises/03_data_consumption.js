// Data consumption and passing the values to the then method

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ajeet", email: "ajeet@itmavericksolutions.in" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
