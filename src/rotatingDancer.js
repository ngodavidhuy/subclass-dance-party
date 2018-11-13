var rotatingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

rotatingDancer.prototype = Object.create(makeDancer.prototype);
rotatingDancer.prototype.constructor = rotatingDancer;

rotatingDancer.prototype.oldStep = makeDancer.prototype.step;

rotatingDancer.prototype.step = function() {
  this.oldStep();
  this.$node.toggle();
};
