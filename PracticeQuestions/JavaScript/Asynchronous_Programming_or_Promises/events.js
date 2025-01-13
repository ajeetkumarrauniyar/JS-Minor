// Events example

const func1 = () => {
  setTimeout(() => {
    console.log("First Called");
  }, 1000);
};

const func2 = () => {
  setTimeout(() => {
    console.log("Second Called");
  }, 2000);
};

const func3 = () => {
  setTimeout(() => {
    console.log("Third Called");
  }, 1000);
};

func1();
func2();
func3();
