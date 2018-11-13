var makeCuteDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer"><img class="deadpool-3" src="img/deadpool_3.gif"></span>');
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
};

makeCuteDancer.prototype = Object.create(makeDancer.prototype);
makeCuteDancer.prototype.constructor = makeCuteDancer;

makeCuteDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.fadeIn().delay(1500).fadeOut();
  this.$node.show('bounce');
};