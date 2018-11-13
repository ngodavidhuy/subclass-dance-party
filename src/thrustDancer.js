var makeThrustDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="deadpool-1" src="img/deadpool_1.gif"></span>');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeThrustDancer.prototype = Object.create(makeDancer.prototype);
makeThrustDancer.prototype.constructor = makeThrustDancer;

makeThrustDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.show();
};
