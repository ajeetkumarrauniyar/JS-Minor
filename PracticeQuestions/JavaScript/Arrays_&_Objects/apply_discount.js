// Apply discount to prices array

const prices = [250, 645, 300, 900, 50];

// 1st Method

// let i = 0; // Start from the beginning (O)
// for (let val of prices) {
//   let offer = val / 10;
//   let discountedPrice = val - offer;
//   prices[i] = discountedPrice
//   console.log(
//     `So discounted price is ${prices[i]},`
//   );
//   console.log(prices);
//   i++;
// }

// 2nd method:

// for (let i = 0; i < prices.length; i++) {
//   let offer = prices[i] / 10;
//   prices[i] -= offer;
// }
// console.log(prices);

// prices.push(99);
// prices.push(59);

// console.log(prices);

// prices.pop();
// prices.pop();

// console.log(prices);

// 3rd method:
for (let i = 0; i < prices.length; i++) {
  prices[i] -= prices[i] / 10;
}
console.log(prices);
