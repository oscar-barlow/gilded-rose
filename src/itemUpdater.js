"use strict";

// updates items
function ItemUpdater(items) {
  this._items = items;
}

ItemUpdater.prototype.items = function() {
  return this._items;
};

ItemUpdater.prototype.run = function() {
  this.setItems(this.updateSellIn());
  this.setItems(this.updateQuality());
  return this.items();
};

ItemUpdater.prototype.setItems = function(array) {
  this._items = array;
};

ItemUpdater.prototype.updateSellIn = function() {
  var updatedItems = []
  this.items().forEach(function(element) {
    if (element.isLegendary()) {
      updatedItems.push(element);
    } else {
      element.decreaseSellIn(1);
      updatedItems.push(element);
    };
  });
  return updatedItems;
};

ItemUpdater.prototype.updateQuality = function() {
  var updatedItems = []
  this.items().forEach(function(element) {
    this._updateLegendaryQuality(element, updatedItems);
    this._updateOrdinaryQuality(element, updatedItems);
    this._updateAgedQuality(element, updatedItems);
    this._updateBackStagePassQuality(element, updatedItems);
  }, this);
  return updatedItems;
};

ItemUpdater.prototype._updateLegendaryQuality = function(item, array) {
  if (item.isLegendary()) {
    array.push(item);
  }
};

ItemUpdater.prototype._updateOrdinaryQuality = function(item, array) {
  if(item.isOrdinary()) {
    if(item.isPastSellIn()) {
      item.decreaseQuality(2);
    } else {
      item.decreaseQuality(1);
    };
    array.push(item);
  };
};

ItemUpdater.prototype._updateAgedQuality = function(item, array) {
  if(item.isAged()){
    item.increaseQuality(1);
    array.push(item);
  }
};

ItemUpdater.prototype._updateBackStagePassQuality = function(item, array) {
  if(item.isBackStagePass()) {
    if(item.sellByDays() > 10) {
      item.decreaseQuality(1);
    } else if(item.sellByDays() < 10 && item.sellByDays() > 5) {
      item.increaseQuality(2);
    } else if(item.sellByDays() < 5 && item.sellByDays() >= 0 ) {
      item.increaseQuality(3);
    } else {
      item.setQuality(0);
    };
    array.push(item);
  };
};
