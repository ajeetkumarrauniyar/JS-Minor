// Fetching users from an API

const getAllUsers = async () => {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getAllUsers();

//2nd Method

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    return console.log(error);
  });
