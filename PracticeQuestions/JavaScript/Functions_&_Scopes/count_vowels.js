// Count vowels in a string

// 1. String
// 2. Break down in letters;
// 3. Compare letters with a,e,i,o,u
// 4. merge the finally separated letters
// 5. increment the letters count
// 6. return the count

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letters = str[i];
    if (
      letters == "a" ||
      letters == "e" ||
      letters == "i" ||
      letters == "o" ||
      letters == "u"
    ) {
      count++;
    }
  }
  return console.log(count);
}

// const countVowels = (str) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letters = str[i];
//     if (
//       letters == "a" ||
//       letters == "e" ||
//       letters == "i" ||
//       letters == "o" ||
//       letters == "u"
//     ) {
//       count++;
//     }
//   }
//   return console.log(count);
// };

// countVowels("Ajeet Kumar Rauniyar");
