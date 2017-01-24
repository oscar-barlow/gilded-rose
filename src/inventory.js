function Inventory() {
  this._items = [];
}

Inventory.prototype.items = function() {
  return this._items;
};

Inventory.prototype.add = function(item) {
  this._items.push(item);
};

Inventory.prototype.createItem = function(name, sell_in, quality) {
  return new Item(name, sell_in, quality);
};
