class VendingMachine {
  constructor(items) {
    this.inventory = items;
    // item = {
    //   name: 'pizza',
    //   price: 2000,
    //   count = 6
    // }
    this.till = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };
    this.selection = { row: undefined, column: undefined };
    this.coinsInserted = [];
    this._console = [];
  }

  insertCoin(coin) {
    if (this.till.hasOwnProperty(coin)) {
      this.till[coin]++;
      this.coinsInserted.push(coin);
    }
  }

  get balance() {
    return this.coinsInserted.reduce((total, nextCoin) => total + nextCoin, 0);
  }

  pressButton(button) {
    if (typeof button === "string") {
      return this._selectRow(button);
    } else if (this.selection.row) {
      return this._selectColumn(button);
    }
  }

  _selectRow(row) {
    this.selection.row = row;
    console.log(row);
    this._console.push(row);
  }

  _selectColumn(column) {
    this.selection.column = column;
    console.log(this.selection.row, column);
    this._console.push(this.selection.row, column);
    this._vend();
  }

  _vend() {
    const buttonMap = {
      A: 0,
      B: 1,
      C: 2,
      D: 3,
    };
    const row = buttonMap[this.selection.row];
    const column = this.selection.column - 1;

    if (this.inventory[row][column].count === 0) {
      console.error("Out of stock.");
      console.log(this._console);
      this._console.push("Out of stock.");
    } else if (this.inventory[row][column].price <= this.balance) {
      this.inventory[row][column].count--;
      console.log("Here is your " + this.inventory[row][column].name);

      this._dispenseChange(this.inventory[row][column].price);
    } else {
      // give error
      console.error("Not enough money.");
      this._console.push("Not enough money.");
    }
  }

  _dispenseChange(price) {
    let change = this.balance - price;

    const returnedCoins = this._calculateChange(change);

    console.log(returnedCoins);

    this._initialise();
  }

  _calculateChange(change) {
    const returnedCoins = {
      10: 0,
      50: 0,
      100: 0,
      500: 0,
    };

    while (change >= 500 && this.till[500] > 0) {
      returnedCoins[500]++;
      this.till[500]--;
      change -= 500;
    }
    while (change >= 100 && this.till[100] > 0) {
      returnedCoins[100]++;
      this.till[100]--;
      change -= 100;
    }
    while (change >= 50 && this.till[50] > 0) {
      returnedCoins[50]++;
      this.till[50]--;
      change -= 50;
    }
    while (change > 0 && this.till[10] > 0) {
      returnedCoins[10]++;
      this.till[10]--;
      change -= 10;
    }

    return returnedCoins;
  }

  _initialise() {
    this.selection.row = undefined;
    this.selection.column = undefined;
    this.coinsInserted = [];
  }
}

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

module.exports = VendingMachine;
