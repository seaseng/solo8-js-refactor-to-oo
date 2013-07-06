function DieView(die) {
  var self = this;
  this.die = die;
  this.die_template = '<div class="die">0</div>';
  this.dice_div_holder = '.dice';
  this.single_die_div = '.die';

  this.addDie = function () {
    // debugger;
    $(this.dice_div_holder).append(this.die_template);
  };

  this.rollDice = function () {
    // debugger;
    $(this.single_die_div).each(function (k, each_die_div) {
      // debugger;
      $(each_die_div).text( self.die.value() );
    });
  };
}

function DieController (die) {
  this.die = die;
  this.add_die_button = '#roller button.add';
  this.roll_die_button = '#roller button.roll';
  var die_view = new DieView(die);

  this.addEvents = function() {
    $(this.add_die_button).on('click', function() {
      console.log("die added");
      // debugger;
      die_view.addDie();
    });

    $(this.roll_die_button).on('click', function() {
      console.log('rolling all the dice');
      die_view.rollDice();
    });
  };
}



function Die(num_sides) {
  this.num_sides = num_sides;
}

Die.prototype.value = function() {
  return Math.floor((Math.random()*this.num_sides)+1);
};

$(document).ready(function() {

  die = new Die(6);
  die_controller = new DieController(die);

  die_controller.addEvents();

  // $('#roller button.add').on('click', function() {
  //   console.log("WAT");
  //   $('.dice').append('<div class="die">0</div>');
  // });

  // $('#roller button.roll').on('click', function() {
  //   $('.die').each(function(k, die) {
  //     var value = Math.floor((Math.random()*6)+1);
  //     $(die).text(value);
  //   });
  // });



});
