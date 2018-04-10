class VendingMachine {
  constructor(items) {
    this.inventory = items;
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
  }

  insertCoin(coin) {
    if (this.till.hasOwnProperty(coin)) {
      this.till[coin]++;
    }
  }

  get balance() {
    let total = 0;
    for (let coin in this.till) {
      total += this.till[coin] * coin;
    }
    return total;
  }
}

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

module.exports = VendingMachine;
