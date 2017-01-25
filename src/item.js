// The Item class and its properties must not be changed unless you want to be
// one-shotted by the goblin in the corner
//
// The Item class holds data about an item
function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
};

Item.prototype.increaseQuality = function(number) {
  this.quality += number;
};

Item.prototype.decreaseQuality = function(number) {
  this.quality -= number;
};

Item.prototype.decreaseSellIn = function(number) {
  this.sell_in -= number
};
