// Promise chaining

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Ajeet", email: "ajeet@itmavsolutions.in" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    console.log(user.username);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The Promise is either fulfilled or rejected")); // Default,  will always run either the promise is resolved or rejected
