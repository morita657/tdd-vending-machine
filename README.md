# TDD Vending Machine
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

Practice pairing and test-driven development skills as you create a vending machine.

## Objectives

In this task you will:

* Use test-driven development to create a state machine
* Practice writing tests before code
* Practice using the SEAT pattern for tests
* Practice effective pairing techniques

## User story

* As a shopper,
* I would like to have a vending machine
* So that I can buy goods efficiently.

## State

* balance - the amount of money currently inserted but not yet used
* till - a map of coins and counts in the machine
* selectedRow - stores the row selected, if any
* selectedColumn - stores the selected column, if any

## Behavior

* `insertCoin(denomination)` - to put a coin in the machine
* `changeReturn()` - logs the coins to the console and resets the balance
* `pressButton('A'-'D')` - select a row
* `pressButton(1-4)` - select a column

## Instructions

Model the products as a 4x4 array of arrays containing your favorite products, with a name and price, eg:

```JavaScript
const plumbus = {name: `plumbus`, price: 350, count: 5};
const coffee = {name: "Tully's", price: 250, count: 7};

const inventory = [
  [plumbus, coffee, ..., ...],
  [..., ..., ..., ...],
  [..., ..., ..., ...],
  [..., ..., ..., ...],
]
```

The happy path should proceed as follows:

1.  Insert coins
1.  Select a row
1.  Select a column
1.  Dispense the product (log to console)
1.  Update the inventory
1.  Dispense change

## Acceptance criteria

1.  _Given_ that the balance is zero, _when_ a coin is inserted, _then_ the balance should rise _and_ types of coins should be stored
1.  _Given_ that no row is selected, _when_ a row is selected the letter should be saved and printed to the console
1.  _Given_ that a row is selected, _when_ there is sufficiant balance and inventory and a column is selected
    1.  _then_ the row and column should be logged to the console
    1.  _and_ a message should be logged stating "Here is your [item name]"
    1.  _and_ the item inventory should decrease by 1
    1.  _and_ the correct change should be returned (log type and number of coins to console)
1.  _Given_ that a row and column are selected, _when_ there is no inventory at that column, _then_ an error message should be logged.
1.  _Given_ that a row and column are selected, _when_ the balance is insufficant to purchace the selected item, _then_ an error message should be printed
1.  _Given_ that the program has just started, _when_ the balance is read, _then_ it should read zero

**_Please note: you must track both the types of coins and number of coins to compute the balance and return change_**

## Unhappy paths

At minimum, you must implement tests for all the acceptance criteria, however should not limit yourself to only these tests. Write as many tests as needed.

As a good TDD developer, when you find an edge case outside the specs, you should ask your PM (insutrctor) what the desired functionality should be.

## Pairing

Take this opportunity to practice _ping-pong pairing_:

1.  The pair on the left writes a failing test
1.  The pair on the right writes the minimum code to make it pass
1.  Righty then writes the next test
1.  Lefty gets the test to pass

Don't forget to refactor, and only do so when green!

## Setup

```bash
yarn install
yarn test
```
