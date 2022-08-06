/* eslint-disable no-plusplus */
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= n - 1; i++) { if (n % i === 0) return false; }
  return true;
};

const getPrimeNumbers = (firstNumber, lastNumber) => {
  const primeNumbers = [];
  for (let i = firstNumber; i <= lastNumber; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
};

module.exports = {
  isPrime,
  getPrimeNumbers,
};
