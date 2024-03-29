$(document).ready(function() {
  window.dancers = [];
  window.dancers2 = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // console.log(dancerMakerFunctionName); // makeBlinkyDancer 'string'
    // console.log(window[dancerMakerFunctionName]);
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 2500
    );


    if (dancerMakerFunction === 'makeBlinkyDancer') {
      window.dancers2.push(dancer);
    } else {
      window.dancers.push(dancer);
    }
    
    $('body').append(dancer.$node);
    console.log(dancerMakerFunction);
  });

  $('.lineUpTop').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpTop();
    }
  });

  $('.lineUpBottom').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpBottom();
    }
  });

  $('.lineUpLeft').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpLeft();
    }
  });

  $('.lineUpRight').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUpRight();
    }
  });

  $('.scatter').on('click', function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].scatter();
    }
  });

  
});

