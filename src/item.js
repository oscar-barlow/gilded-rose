"use strict";

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
  if (this.quality + number > 50) {
    this.quality = 50;
  } else {
    this.quality += number;
  };
};

Item.prototype.decreaseQuality = function(number) {
  if (this.quality - number < 0) {
    this.quality = 0;
  } else {
    this.quality -= number;
  };
};

Item.prototype.decreaseSellIn = function(number) {
  this.sell_in -= number
};

Item.prototype.isPastSellIn = function() {
  return this.sell_in < 0;
};

Item.prototype.isLegendary = function() {
  return /Legendary/i.test(this.name);
};

Item.prototype.isAged = function() {
  return /Aged/i.test(this.name);
};

Item.prototype.isBackStagePass = function() {
  return /Backstage pass/i.test(this.name);;
};

Item.prototype.isConjured = function() {
  return /Conjured/i.test(this.name);;
};

Item.prototype.isOrdinary = function() {
  return !this.isLegendary() && !this.isAged() && !this.isBackStagePass() && !this.isConjured();
};
