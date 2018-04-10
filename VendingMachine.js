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
      this._selectRow(button);
    } else if (this.selection.row) {
      this._selectColumn(button);
    }
  }

  _selectRow(row) {
    this.selection.row = row;
    console.log(row);
  }

  _selectColumn(column) {
    this.selection.column = column;
    console.log(this.selection.row, column);
  }
}

/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/

module.exports = VendingMachine;
