var HoneyMakerBee = function() {
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
}

// Returns a boolean: An interface to observe whether honey was given.
HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot > 0) {
    this.honeyPot--;
    return true;
  }
  return false;
}