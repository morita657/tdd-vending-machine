class Item {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

const pocariSweat = new Item("Pocari Sweat", 150, 5);
const pocca = new Item("Pocca Coffee", 120, 1);
const match = new Item("Match!", 130, 6);
const vodka = new Item("Korpiklaani", 1300, 2);
const diamond = new Item("Diamond", 250000, 1);
const macbook = new Item("Macbook", 50000, 1);
const takoyaki = new Item("Takoyaki", 500, 4);
const googleHome = new Item("Google Home", 1000, 2);
const homePod = new Item("HomePod", 10000, 1);
const amazonAlexa = new Item("Alexa", 1000, 1);
const actualMatch = new Item("One wooden match", 10, 600);
const boardGame = new Item("Jumanji", 1500, 6);
const ghost = new Item("Ghost!!!", 2000, 3);
const office = new Item("Roppongi Hills", 100000, 1);
const msOffice = new Item("Microsoft Office 2016", 5000, 30);
const browser = new Item("safari", 0, 1000);

const inventory = [
  [pocariSweat, pocca, match, vodka],
  [diamond, macbook, takoyaki, googleHome],
  [homePod, amazonAlexa, actualMatch, boardGame],
  [ghost, office, msOffice, browser],
];

module.exports = inventory;
