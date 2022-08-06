#!/usr/bin/env node
/* eslint-disable no-console */
const { Command } = require('commander');
const { getPrimeNumbers } = require('./methods');

const program = new Command();

program
  .requiredOption('-f, --firt <number>', 'must have first number')
  .requiredOption('-l, --last <number>', 'must have last number')
  .action((options) => {
    const firstNumber = Number(options.firt);
    const lastNumber = Number(options.last);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(firstNumber) || isNaN(lastNumber)) {
      console.log('first and last need to be a number');
      return;
    }
    if (firstNumber === lastNumber || firstNumber > lastNumber) {
      console.log('first number need to be greather than last number');
      return;
    }
    const primeNumbers = getPrimeNumbers(firstNumber, lastNumber);
    console.log(primeNumbers.join(', '));
  });
program.parse();
