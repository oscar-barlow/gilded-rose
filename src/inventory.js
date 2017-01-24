function Inventory() {
  this._items = [];
}

Inventory.prototype.items = function() {
  return this._items;
};
