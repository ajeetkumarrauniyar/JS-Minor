// Handling promise with async/await

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "Ajeet", email: "test@example.com" });
    } else {
      reject("Error: Something went wrong in Promise Five");
    }
  }, 1000);
});

const consumedPromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumedPromiseFive();
