// Contains items, of all types
function Inventory() {
  this._items = [];
}

Inventory.prototype.items = function() {
  return this._items;
};

Inventory.prototype.add = function(item) {
  this._items.push(item);
};

Inventory.prototype.setItems = function(array) {
  this._items = array;
};
