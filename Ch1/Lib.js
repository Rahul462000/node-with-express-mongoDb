function sum(a, b) {
  return a + b;
}
// exporting the function
// one method
exports.sum = sum;

// another method
exports.sub = (m, n) => {
  return m - n;
};

// this given below is new method with ecma script
// const sum = (a, b) => {
//   return a + b;
// };

// const sub = (a, b) => {
//   return a - b;
// };

// export { sum, sub };
