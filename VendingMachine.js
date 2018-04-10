class VendingMachine {
  constructor(items) {
    this.inventory = items;
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

  get _tillTotal() {
    let tillTotal = 0;
    for (let coin in this.till) {
      tillTotal += this.till[coin] * coin;
    }
    console.log(tillTotal);
    return tillTotal;
  }

  pressButton(button) {
    if (typeof button === "string") {
      this._selectRow(button);
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
    return this._vend();
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
    const selectedItem = this.inventory[row][column];

    const changeAvailable = this._calculateChange(
      this.balance - selectedItem.price
    );

    if (!changeAvailable) {
      console.error("No change available.");
      this._console.push("No change available.");
    } else if (selectedItem.count === 0) {
      console.error("Out of stock.");
      this._console.push("Out of stock.");
    } else if (this._tillTotal < selectedItem.price) {
      console.error("Not enough money.");
      this._console.push("Not enough money.");
    } else {
      selectedItem.count--;
      console.log("Here is your " + selectedItem.name);
      return this._dispenseChange(selectedItem.price);
    }
  }

  _dispenseChange(price) {
    let change = this.balance - price;

    const returnedCoins = this._calculateChange(change);

    console.log(returnedCoins);

    this._initialise();

    let returnedTotal = 0;

    for (let coin in returnedCoins) {
      returnedTotal += returnedCoins[coin] * coin;
    }

    return returnedTotal;
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

    if (change > 0) return false;

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
